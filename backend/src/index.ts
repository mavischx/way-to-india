import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from 'cors';
import admin from 'firebase-admin';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});



const db = admin.firestore();

// Register a new user and store their data
app.post('/api/register', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    // Store user info in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email: userRecord.email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(201).json({ message: 'User registered successfully!', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: (error as Error).message });
  }
});

// Login User
app.post('/api/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };

  try {
    const user = await admin.auth().getUserByEmail(email);
    // In production, you would use Firebase Authentication to verify password
    res.status(200).json({ message: 'User logged in successfully!', uid: user.uid });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(400).json({ error: (error as Error).message });
  }
});



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
