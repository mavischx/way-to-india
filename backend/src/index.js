"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.applicationDefault(),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
});
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
const db = firebase_admin_1.default.firestore();
// Register a new user and store their data
app.post('/api/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const userRecord = yield firebase_admin_1.default.auth().createUser({
            email,
            password,
        });
        // Store user info in Firestore
        yield db.collection('users').doc(userRecord.uid).set({
            email: userRecord.email,
            createdAt: firebase_admin_1.default.firestore.FieldValue.serverTimestamp(),
        });
        res.status(201).json({ message: 'User registered successfully!', uid: userRecord.uid });
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(400).json({ error: error.message });
    }
}));
// Login User
app.post('/api/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield firebase_admin_1.default.auth().getUserByEmail(email);
        // In production, you would use Firebase Authentication to verify password
        res.status(200).json({ message: 'User logged in successfully!', uid: user.uid });
    }
    catch (error) {
        console.error('Error logging in user:', error);
        res.status(400).json({ error: error.message });
    }
}));
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
