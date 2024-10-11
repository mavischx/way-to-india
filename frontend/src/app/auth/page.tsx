'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SignupForm from "@/app/auth/SignUpForm";
import OTPVerification from "@/app/auth/otp-verification";
import CircleLoader from '../components/CircleLoader';

// Create a component to handle Auth logic
const AuthLogic = () => {
    const [step, setStep] = useState<'signup' | 'login' | 'otp'>('signup');
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const queryStep = searchParams.get('step');

        if (queryStep === 'otp-signup') {
            setStep('otp');
        }

        if (queryStep === 'login') {
            setStep('login');
        }
    }, [searchParams]);

    const handleSignupSubmit = () => {
        setStep('otp');
        router.push(`/auth?step=otp-signup`);
    };

    const handleLoginSubmit = () => {
        setStep('login');
        router.push('/');
    };

    const switchToLogin = () => {
        setStep('login');
    };

    const switchToSignup = () => {
        setStep('signup');
    };

    const handleOtpVerification = () => {
        setStep('login');
        router.push('/');
    };

    return (
        <div>
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

// Main AuthPage component
const AuthPage = () => {
    return (
        <Suspense fallback={<CircleLoader />}>
            <AuthLogic />
        </Suspense>
    );
};

export default AuthPage;