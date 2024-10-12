import express from 'express';
import { auth, db } from './firebase';

const app = express();
app.use(express.json());

// Example route to create a new user
app.post('/users', async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Create a new user in Firebase Authentication
    const user = await auth.createUser({ email, password });

    // After creating the user, store their information in Firestore
    await db.collection('users').doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      name: name || null // Optionally include additional data (e.g., name)
    
    });

    res.status(201).send({ uid: user.uid, message: 'User created successfully' });
  } catch (error) {
    res.status(400).send({ error: error });
  }
});


// Example route to fetch Firestore data
app.get('/data', async (req, res) => {
  try {
    const snapshot = await db.collection('users').get();
    const data = snapshot.docs.map(doc => doc.data());
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
