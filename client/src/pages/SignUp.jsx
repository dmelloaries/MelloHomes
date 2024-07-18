//import React from 'react'

import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [data, setdata] = useState({});
  const handleChange = (e) => {
    setdata({
      ...setdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
  }

  console.log(setdata);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-white">Sign Up</h2>

        <div className="relative flex items-center justify-center">
          <span className="absolute px-3 bg-gray-900 font-semibold text-white"></span>
          <hr className="w-full border-gray-400" />
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white border-e-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-400 focus:ring-2 p-3 rounded-lg focus:ring-blue-500 focus:border-transparent"
              placeholder="Email Address"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="Username"
              id="Username"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded p-3 rounded-lg text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Username"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded p-3 rounded-lg text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700 p-3 rounded-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-400">
          have an account?{" "}
          <Link to="/signin" className="text-blue-500 hover:underline">
            Sign In
          </Link>
        </p>

        <p className="mt-4 text-xs text-center text-gray-500">
          By creating an account, you agree to{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
