//src/app/(auth)/SignUpForm.tsx
'use client'
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import loginBackground from "@/assets/images/loginImage.png"
import { SignInButtonGoogle, SignInButtonApple } from "@/app/components/SignInButton";

interface SignupFormProps {
    onSubmit: () => void;
    mode: 'signup' | 'login';
    onSwitchToLogin: () => void; // Callback to switch to login
    onSwitchToSignup: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, mode, onSwitchToLogin, onSwitchToSignup }) => {
    // const navigate = useNavigate();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Prevent rendering until mounted on the client side
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        // Handle the form submission logic (validation, API call, etc.)
        if (mode === 'signup') {
            router.push('/auth/otp-verification');
        } else if (mode === 'login') {
            router.push('/'); // Redirect to user profile or landing page for login
        }
        onSubmit();
    };

    return (
        <div className="flex min-h-screen bg-white">
            <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden ">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-8 text-black justify-center items-center flex flex-col">
                    <div className="w-full max-w-md text-left mx-auto">
                        <div className="mb-12 font-bold">
                            <h2 className="text-3xl mb-2">
                                {mode === 'signup' ? 'Get Started Now' : 'Welcome Back'}
                            </h2>
                            <p>
                                {mode === 'signup' ? '' : 'Enter your Credentials to access your account'}
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            {mode === 'signup' && (
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full p-2 border rounded"
                                        required={mode === 'signup'}
                                    />
                                </div>
                            )}
                            <div className="mb-8">
                                <label className="block text-gray-700 font-semibold">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-gray-700 font-semibold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full p-2 border rounded"
                                    required
                                />
                            </div>
                            {mode === 'signup' && (
                                <div className="mb-4">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            name="agreeToTerms"
                                            checked={formData.agreeToTerms}
                                            onChange={handleChange}
                                            className="mr-2"
                                            required
                                        />
                                        I agree to the&nbsp;
                                        <a href="#" className="text-blue-600 underline">terms & policy</a>
                                    </label>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="w-full bg-carrot-orange text-white font-bold p-2 rounded-lg hover:bg-orange-600 transition duration-300"
                            >
                                {mode === 'signup' ? 'Sign Up' : 'Login'}
                            </button>
                        </form>
                        <div className="flex items-center justify-center my-8 w-full">
                            <hr className="w-full text-gray-300" />
                            <span className="mx-4 text-gray-500">Or</span>
                            <hr className="w-full border-gray-300" />
                        </div>

                        <div className="flex justify-evenly">
                            <SignInButtonGoogle />
                            <SignInButtonApple />
                        </div>
                        {mode === 'signup' ? (
                            <p className="text-center mt-4">
                                Have an account?{' '}
                                <a
                                    href="#" // Prevent navigation to a different URL
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSwitchToLogin(); // Switch to login mode
                                    }}
                                    className="text-blue-600 underline"
                                >
                                    Sign In
                                </a>
                            </p>
                        ) : (
                            <p className="text-center mt-4">
                                Don’t have an account?{' '}
                                <a
                                    href="#" // Prevent navigation
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSwitchToSignup(); // Switch to signup mode
                                    }}
                                    className="text-blue-600 underline"
                                >
                                    Sign Up
                                </a>
                            </p>
                        )}
                    </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-screen">
                    <Image
                        src={loginBackground}
                        alt="Login Background"
                        fill
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </div >
    );
};

export default SignupForm;