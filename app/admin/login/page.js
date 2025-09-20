"use client"
import React, { useState } from 'react'
import { Lock, User, Eye, EyeOff, Wifi, ArrowRight, AlertCircle } from 'lucide-react';

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setIsLoading(true);
        try {
            const res = await fetch('/api/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            })
            if (res.ok) {
                // ✅ Save login in localStorage
                localStorage.setItem("isAdmin", "true");
                window.location.href = "/admin"; // redirect
            } else {
                const data = await res.json();
                setErrors({ general: data.message });
            }
        } catch (error) {
            setErrors({ general: "Something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='w-full min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4'>
            {/* Background Pattern */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl'></div>
            </div>

            {/* Login Card */}
            <div className='relative w-full max-w-md'>
                <div className='bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl'>
                    {/* Header */}
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl mb-6'>
                            <Wifi className='w-10 h-10 text-cyan-400' />
                        </div>
                        <h1 className='text-3xl font-bold text-white mb-2'>Welcome Back</h1>
                        <p className='text-gray-400'>Sign in to your admin account</p>
                    </div>

                    {/* Login Form */}
                    <div className='space-y-6'>
                        {/* Username Field */}
                        <div className='space-y-2'>
                            <label htmlFor='username' className='block text-sm font-medium text-gray-300'>
                                Username
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                    <User className='w-5 h-5 text-gray-400' />
                                </div>
                                <input
                                    type='text'
                                    id='username'
                                    name='username'
                                    value={formData.username}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${errors.username
                                        ? 'border-red-500 focus:ring-red-500/50'
                                        : 'border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/30'
                                        }`}
                                    placeholder='Enter your username'
                                />
                            </div>
                            {errors.username && (
                                <div className='flex items-center gap-2 text-red-400 text-sm'>
                                    <AlertCircle className='w-4 h-4' />
                                    {errors.username}
                                </div>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className='space-y-2'>
                            <label htmlFor='password' className='block text-sm font-medium text-gray-300'>
                                Password
                            </label>
                            <div className='relative'>
                                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                                    <Lock className='w-5 h-5 text-gray-400' />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-12 pr-12 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-200 ${errors.password
                                        ? 'border-red-500 focus:ring-red-500/50'
                                        : 'border-white/10 focus:border-cyan-500/50 focus:ring-cyan-500/30'
                                        }`}
                                    placeholder='Enter your password'
                                />
                                <button
                                    type='button'
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-300 transition-colors'
                                >
                                    {showPassword ? <EyeOff className='w-5 h-5' /> : <Eye className='w-5 h-5' />}
                                </button>
                            </div>
                            {errors.password && (
                                <div className='flex items-center gap-2 text-red-400 text-sm'>
                                    <AlertCircle className='w-4 h-4' />
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className='w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/25 disabled:cursor-not-allowed'
                        >
                            {isLoading ? (
                                <>
                                    <div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className='w-5 h-5' />
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className='text-center mt-6 text-gray-500 text-sm'>
                    <p>© 2025 Network Admin Panel. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;