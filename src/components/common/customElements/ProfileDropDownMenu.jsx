import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // logout logic
    console.log("Logout clicked");
    setUser(null); // Reset the user state after logout
  };

  return (
    <div className="relative">
      {user ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-white">{user.username}</span>
        </div>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            navigate("/auth/register");
          }}
        >
          ثبت نام
        </button>
      )}

      {user && isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg">
          <div className="px-4 py-2">
            <p className="text-gray-800 font-semibold">{user.username}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
          <div className="border-t border-gray-300"></div>
          <button
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
