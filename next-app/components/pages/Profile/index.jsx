/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
"use client";

import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center p-4 text-xl">Loading profile...</div>;;
  }

  if (!isAuthenticated || !user) {
    return (
      <div className="text-center p-4 text-xl">
        You must be logged in to view this page.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10 gap-4">
      {user.picture && (
        <img
          src={user.picture}
          alt={user.name}
          className="w-24 h-24 rounded-full mb-4"
        />
      )}

      <h1 className="text-3xl font-bold mb-2">Profile</h1>

      <div className="text-lg text-left">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        {user.email && (
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default Profile;
