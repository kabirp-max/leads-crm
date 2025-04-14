import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
    return
  const email = localStorage.getItem("userEmail");
  const token = localStorage.getItem("authToken");
  const navigate = useNavigate();

  const userMap = {
    "aryan@cd.com": { name: "Aryan", department: "CD" },
    "shubham@cdqa.com": { name: "Shubham", department: "CDQA" },
    "viraj@quality.com": { name: "Viraj", department: "Quality" },
  };

  const user = userMap[email];

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <div style={{ padding: "16px", backgroundColor: "#f0f4ff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      {token && user ? (
        <>
          <p style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
            Logged in as {user.name} from {user.department}
          </p>
          <button onClick={handleLogout} style={{ padding: "6px 12px", backgroundColor: "#ff4d4f", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Logout
          </button>
        </>
      ) : (
        <p style={{ margin: 0, color: "#999" }}>Not logged in</p>
      )}
    </div>
  );
}
