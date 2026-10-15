import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "var(--bg)",
        color: "var(--ink)",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div>
        <h1
          style={{
            font: "700 clamp(4rem, 10vw, 8rem)/1 var(--d)",
            letterSpacing: "-0.05em",
            color: "var(--accent)",
            margin: "0 0 16px",
          }}
        >
          404
        </h1>
        <p
          style={{
            font: "400 1.25rem var(--b)",
            color: "var(--muted)",
            marginBottom: "32px",
          }}
        >
          Page not found
        </p>
        <Link className="btn" to="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
