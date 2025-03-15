"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateAdmin() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const createAdmin = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/create-admin");
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setError("Error creating admin user: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create Admin User
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            This will create a new admin user with default credentials
          </p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
        )}

        {result && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg">
            <p className="font-medium">{result.message}</p>
            {result.passwordVerified ? (
              <p className="text-green-600 mt-2">
                ✓ Password verification successful
              </p>
            ) : (
              <p className="text-red-600 mt-2">
                ✗ Password verification failed
              </p>
            )}
            <div className="mt-4 p-3 bg-white rounded border border-green-200">
              <h3 className="font-medium mb-2">Admin Credentials:</h3>
              <p className="mb-1">
                <span className="font-medium">Username:</span>{" "}
                {result.credentials?.username}
              </p>
              <p>
                <span className="font-medium">Password:</span>{" "}
                {result.credentials?.password}
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <button
            onClick={createAdmin}
            disabled={loading}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Admin User"}
          </button>

          <Link href="/admin">
            <button className="w-full flex justify-center py-3 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Go to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
