// src/app/integrations/page.tsx

"use client"; // Add this line to make this a Client Component

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const IntegrationsPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      console.log("Session changed:", session);
      // You can also perform any actions needed when the session changes
    } else {
      console.log("No active session");
    }
  }, [session]);
  console.log(session);

  const handleConnectGithub = async () => {
    try {
      // Trigger the sign-in process for GitHub
      await signIn("github");
    } catch (error) {
      console.error("Error connecting with GitHub:", error);
    }
  };

  const handleLogout = async () => {
    // Trigger the sign-out process
    signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Integrations</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          GitHub Integration
        </h2>
        {session ? (
          <>
            <p className="text-lg text-gray-600 mb-4">Connected to GitHub!</p>
            <button
              onClick={handleLogout}
              className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleConnectGithub}
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            Connect with GitHub
          </button>
        )}
      </div>
      {/* Add more integrations here */}
    </div>
  );
};

export default IntegrationsPage;
