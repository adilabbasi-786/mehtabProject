"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DebugPage() {
  const [dbInfo, setDbInfo] = useState(null);
  const [loginTest, setLoginTest] = useState(null);
  const [resetResult, setResetResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchDbInfo();
  }, []);

  const fetchDbInfo = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/debug");
      const data = await res.json();
      setDbInfo(data);
    } catch (error) {
      setError("Error fetching database info");
    } finally {
      setLoading(false);
    }
  };

  const testLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/debug/login-test");
      const data = await res.json();
      setLoginTest(data);
    } catch (error) {
      setError("Error testing login");
    } finally {
      setLoading(false);
    }
  };

  const resetAdmin = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/debug/reset-admin");
      const data = await res.json();
      setResetResult(data);
      // Refresh DB info after reset
      fetchDbInfo();
    } catch (error) {
      setError("Error resetting admin");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Debug Page</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Database Information</h2>
            {loading && !dbInfo ? (
              <p>Loading...</p>
            ) : dbInfo ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Database Name:</h3>
                  <p className="text-gray-700">
                    {dbInfo.database?.name || "Unknown"}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Collections:</h3>
                  <ul className="list-disc pl-5">
                    {dbInfo.database?.collections?.map((collection, index) => (
                      <li key={index} className="text-gray-700">
                        {collection}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-medium">Admin Users:</h3>
                  {dbInfo.adminUsers?.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {dbInfo.adminUsers.map((user, index) => (
                        <li key={index} className="text-gray-700">
                          {user.username} (ID: {user._id})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-red-500">No admin users found!</p>
                  )}
                </div>

                {dbInfo.adminExists && (
                  <div>
                    <h3 className="font-medium">Admin Details:</h3>
                    <p className="text-gray-700">
                      Username: {dbInfo.adminUsername}
                    </p>
                    <p className="text-gray-700">
                      Password Hash Length: {dbInfo.passwordHashLength}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-red-500">Failed to load database info</p>
            )}

            <button
              onClick={fetchDbInfo}
              disabled={loading}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              Refresh Info
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Login Test</h2>

            <button
              onClick={testLogin}
              disabled={loading}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
            >
              Test Login
            </button>

            {loginTest && (
              <div className="mt-4 space-y-3">
                <div
                  className={`p-3 rounded ${
                    loginTest.passwordTest?.isPasswordCorrect
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <p className="font-medium">
                    Password Test:{" "}
                    {loginTest.passwordTest?.isPasswordCorrect
                      ? "PASSED ✓"
                      : "FAILED ✗"}
                  </p>
                  <p className="text-sm mt-1">{loginTest.nextSteps}</p>
                </div>

                <div>
                  <h3 className="font-medium">Test Details:</h3>
                  <p className="text-gray-700">
                    Username: {loginTest.username}
                  </p>
                  <p className="text-gray-700">
                    Test Password: {loginTest.passwordTest?.testPassword}
                  </p>
                  <p className="text-gray-700">
                    Password Hash Length:{" "}
                    {loginTest.passwordTest?.passwordHashLength}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t">
              <h3 className="font-semibold mb-2">Reset Admin User</h3>
              <p className="text-sm text-gray-600 mb-3">
                This will delete the existing admin user and create a new one
                with the default credentials.
              </p>

              <button
                onClick={resetAdmin}
                disabled={loading}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
              >
                Reset Admin
              </button>

              {resetResult && (
                <div className="mt-3 p-3 bg-yellow-100 rounded">
                  <p className="font-medium">{resetResult.message}</p>
                  {resetResult.verification?.passwordCorrect ? (
                    <p className="text-green-600 text-sm">
                      Verification successful!
                    </p>
                  ) : (
                    <p className="text-red-600 text-sm">Verification failed!</p>
                  )}

                  <div className="mt-2 p-2 bg-white rounded">
                    <h4 className="font-medium">New Credentials:</h4>
                    <p className="text-sm">
                      Username: {resetResult.credentials?.username}
                    </p>
                    <p className="text-sm">
                      Password: {resetResult.credentials?.password}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/admin">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              Back to Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
