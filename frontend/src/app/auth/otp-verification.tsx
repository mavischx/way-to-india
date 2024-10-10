// src/app/(auth)/otp-verification.tsx
'use client';
import React, { useState } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface OTPVerificationProps {
    onVerify: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ onVerify }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [verificationId, setVerificationId] = useState('');

    const handleSendOtp = async () => {
        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', { size: 'invisible' });
        try {
            const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
            setVerificationId(confirmationResult.verificationId);
            console.log('OTP sent!');
        } catch (error) {
            console.error('Error sending OTP:', error);
        }
    };

    const handleVerifyOtp = async () => {
        try {
            const credential = PhoneAuthProvider.credential(verificationId, otp);
            await signInWithCredential(auth, credential);
            console.log('OTP verified and user signed in!');
            // Redirect to your desired page after successful sign-in
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <h1>OTP Verification</h1>
            <div id="recaptcha-container"></div>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
            />
            <button onClick={handleSendOtp}>Send OTP</button>

            {verificationId && (
                <>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                    />
                    <button onClick={handleVerifyOtp}>Verify OTP</button>
                </>
            )}
        </div>
    );
};

export default OTPVerification;
