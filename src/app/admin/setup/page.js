"use client";

import { useState } from "react";
import Link from "next/link";

export default function Setup() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState(null);

  const createAdmin = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/setup");
      const data = await res.json();
      setMessage(data.message);
      if (data.credentials) {
        setCredentials(data.credentials);
      }
    } catch (error) {
      setMessage("Error creating admin user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Admin Setup
          </h2>
          <p className="mt-2 text-xs text-gray-700">
            Please save these credentials. You will need them to log in.
          </p>
        </div>

        <div className="space-y-6">
          {message && (
            <div
              className={`p-4 rounded-lg ${
                message.includes("Error")
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          {credentials && (
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Your Admin Credentials:</h3>
              <p className="text-sm mb-1">
                <strong>Username:</strong> {credentials.username}
              </p>
              <p className="text-sm">
                <strong>Password:</strong> {credentials.password}
              </p>
              <p className="mt-2 text-xs text-gray-700">
                Please save these credentials. You will need them to log in.
              </p>
            </div>
          )}

          <div className="flex flex-col space-y-4">
            <button
              onClick={createAdmin}
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
            >
              {loading ? "Creating..." : "Create Admin User"}
            </button>

            <Link href="/admin">
              <button className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Go to Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
