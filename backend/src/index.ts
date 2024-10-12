import express from 'express';
import { auth, db } from './firebase';

const app = express();
app.use(express.json());

// Example route to create a new user
app.post('/users', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await auth.createUser({ email, password });
    res.status(201).send({ uid: user.uid });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

// Example route to fetch Firestore data
app.get('/data', async (req, res) => {
  try {
    const snapshot = await db.collection('your-collection').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
