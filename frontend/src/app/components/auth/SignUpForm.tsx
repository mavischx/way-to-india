'use client'
import React, { useState } from "react";
import Image from 'next/image';
import loginBackground from "@/assets/images/loginImage.png"
import SignInButton from "@/app/components/SignInButton";


const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agreeToTerms: false,
    });

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
    };

    return (
        <div className="flex min-h-screen bg-white">
            <div className="flex flex-col md:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden ">
                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-8 text-black">
                    <h2 className="text-3xl font-bold mb-6">Get Started Now</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email address</label>
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
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
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
                                I agree to the {" "}<a href="#" className="text-blue-600 underline">terms & policy</a>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold p-2 rounded-lg hover:bg-orange-600 transition duration-300"
                        >
                            Signup
                        </button>
                    </form>

                    <div className="text-center my-4">Or</div>
                    <div className="flex justify-between">
                        <SignInButton />
                        <button className="w-1/2 bg-gray-100 p-2 rounded-lg flex justify-center items-center ml-2">
                            <Image src="/apple-icon.png" alt="Apple" width={24} height={24} className="mr-2" />
                            Sign in with Apple
                        </button>
                    </div>

                    <p className="text-center mt-4">
                        Have an account? <a href="/signin" className="text-blue-600 underline">Sign In</a>
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                    <Image
                        src={loginBackground}
                        alt="Login Background"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignupForm;