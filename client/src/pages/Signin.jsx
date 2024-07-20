import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth.jsx";

import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backendAuthUrl = import.meta.env.VITE_BACKEND_SigninAUTH;

  useEffect(() => {
    
    return () => {
      dispatch(signInFailure(null));
    };
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      const res = await fetch(`${backendAuthUrl}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response from server:", errorText);
        throw new Error("Wrong Credentials..!");
      }

      const data = await res.json();
      console.log('Data received:', data);

      if (!data.success) {
        dispatch(signInFailure(data.message));
        return;
      }

      dispatch(signInSuccess(data.user));
      navigate("/home");
    } catch (error) {
      console.error('Fetch error:', error);
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 shadow-md rounded-3xl border border-neutral-800">
        <h2 className="text-3xl font-bold text-center text-white">Sign In</h2>

        {/* <button className="flex items-center justify-center w-full py-2 text-white font-semibold bg-red-700 hover:bg-red-800 p-3 rounded-lg">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </button> */}
        <OAuth></OAuth>
      

        <div className="relative flex items-center justify-center">
          <span className="absolute px-3 bg-gray-900 font-semibold text-white">
            OR, SIGN IN WITH YOUR EMAIL
          </span>
          <hr className="w-full border-gray-400" />
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded text-gray-400 focus:ring-2 p-3 rounded-lg focus:ring-blue-500 focus:border-transparent"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 bg-gray-800 border border-gray-700 rounded p-3 rounded-lg text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Password"
              required
              onChange={handleChange}
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
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}
        </form>

        <p className="text-center text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="mt-4 text-xs text-center text-gray-500">
          By signing in, you agree to MelloHomes's{" "}
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

export default SignIn;
