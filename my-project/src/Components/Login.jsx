import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="mt-2 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login
        </button>

        <span className="block p-2 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="underline text-cyan-600">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
