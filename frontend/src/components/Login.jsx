import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLogin, setIsLogin] = useState(true);

    // Define the onSubmit function
    const onSubmit = async (data) => {
        try {
            if (isLogin) {
                // Login: Use GET request
                const response = await axios.get('http://localhost:4002/user/login', {
                    params: { email: data.email, password: data.password }, // Sending data as query params
                });
    
                alert('Login successful!');
                console.log(response.data); // Handle success (e.g., store token, redirect)
            } else {
                // Signup: Use POST request
                const response = await axios.post('http://localhost:4002/user/signup', 
                    { name: data.name, email: data.email, password: data.password },
                    { headers: { 'Content-Type': 'application/json' } }
                );
    
                alert('Signup successful!');
                console.log(response.data); // Handle success (e.g., store token, redirect)
            }
        } catch (error) {
            console.error('Error:', error);
            alert(error.response?.data?.message || 'An error occurred. Please try again.');
        }
    };
    

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box p-10">
                    <form method="dialog">
                        {/* Close button */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>

                    {isLogin ? (
                        // Login Form
                        <>
                            <h3 className="font-bold text-4xl">Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4 space-y-2">
                                    <span>Email</span><br />
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full mt-1 px-3 py-1 border rounded-md outline-none"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>
                                <div className="mt-4 mb-5">
                                    <span>Password</span><br />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full mt-1 px-3 py-1 border rounded-md outline-none"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                </div>
                                <div className="flex justify-around">
                                    <button type="submit" className="btn text-xl btn-primary">
                                        Login
                                    </button>
                                    <p>
                                        Not registered?{' '}
                                        <span
                                            className="text-pink-400 font-bold cursor-pointer"
                                            onClick={() => setIsLogin(false)}
                                        >
                                            Signup
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </>
                    ) : (
                        // Signup Form
                        <>
                            <h3 className="font-bold text-4xl">Signup</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mt-4 space-y-2">
                                    <span>Name</span><br />
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full mt-1 px-3 py-1 border rounded-md outline-none"
                                        {...register('name', { required: 'Name is required' })}
                                    />
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                </div>
                                <div className="mt-4 space-y-2">
                                    <span>Email</span><br />
                                    <input
                                        type="email"
                                        placeholder="Enter your Email"
                                        className="w-full mt-1 px-3 py-1 border rounded-md outline-none"
                                        {...register('email', { required: 'Email is required' })}
                                    />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                                </div>
                                <div className="mt-4 mb-5">
                                    <span>Password</span><br />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full mt-1 px-3 py-1 border rounded-md outline-none"
                                        {...register('password', { required: 'Password is required' })}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                </div>
                                <div className="flex justify-around">
                                    <button type="submit" className="btn text-xl btn-primary">
                                        Signup
                                    </button>
                                    <p>
                                        Have an account?{' '}
                                        <span
                                            className="text-pink-400 font-bold cursor-pointer"
                                            onClick={() => setIsLogin(true)}
                                        >
                                            Login
                                        </span>
                                    </p>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </dialog>
        </div>
    );
}

export default Login;