import React from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

export default function Logout() {
  const [authuser, setauthuser] = useAuth();
  const handleLogout = () => {
    try {
      setauthuser({
        ...authuser,
        users: null,
      });
      localStorage.removeItem("users");
      toast.success("Logout Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      window.location.reload();
    } catch (error) {
      toast.error("error:" + error.message);
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <div>
      <button
        className="px-3 py-3 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
