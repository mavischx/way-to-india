import admin from 'firebase-admin';
import * as serviceAccount from '../way-to-india-3cd13-firebase-adminsdk-bzq8f-66375fdbc6.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com',
});

export const db = admin.firestore();
export const auth = admin.auth();
