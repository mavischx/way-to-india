'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import SignupForm from "@/app/auth/SignUpForm";
import OTPVerification from "@/app/auth/otp-verification";

const AuthPage = () => {
    const pathname = usePathname();
    const [step, setStep] = useState<'signup' | 'login' | 'otp'>('signup');
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false); // State to track mounting status

    useEffect(() => {
        setIsMounted(true); // Component is mounted on client
    }, []);

    const handleSignupSubmit = () => {
        setStep('otp'); // Update step to 'otp' after signup
        router.push('/auth/otp-verification'); // Navigate to OTP verification
    };

    const handleLoginSubmit = () => {
        setStep('login'); // Update step after login
        router.push('/auth'); // Navigate after login
    };

    const switchToLogin = () => {
        setStep('login'); // Switch mode to login
    };

    const switchToSignup = () => {
        setStep('signup'); // Switch mode to signup
    };

    const handleOtpVerification = () => {
        setStep('login'); // Set step to login after OTP verification
        router.push('/auth'); // Navigate after OTP verification
    };

    if (!isMounted) {
        return null; // Prevent rendering until mounted on the client side
    }

    return (
        <div>
            {/* <h1>{step === 'signup' ? 'Sign Up' : 'Sign In'}</h1> */}

            {step !== 'otp' ? (
                <SignupForm
                    mode={step}
                    onSubmit={step === 'signup' ? handleSignupSubmit : handleLoginSubmit}
                    onSwitchToLogin={switchToLogin}
                    onSwitchToSignup={switchToSignup}
                />
            ) : (
                <OTPVerification onVerify={handleOtpVerification} />
            )}
        </div>
    );
};

export default AuthPage;