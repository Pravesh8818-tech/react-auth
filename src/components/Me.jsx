import React from "react";
import { Link, useNavigate } from "react-router";
import apiClient from "../../services/apiClient";
import { useEffect, useState } from "react";
function Me() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await apiClient.Me(); // Replace with your actual API endpoint
      if (!response.success) {
        console.error("HTTP error", response);
        // throw new Error(`HTTP error! status: ${response.status}`);
      }

      setUserData(response.user);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  if (loading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>

      {userData && (
        <>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </>
      )}

      <Link to="/login">Logout</Link>
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Logout
      </button>
    </div>
  );
}

export default Me;
