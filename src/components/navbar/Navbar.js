import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ display: "flex", padding: "10px", backgroundColor: "#668bcd" }}
    >
      <p style={{ marginLeft: "10px", marginRight: "10px" }}>
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          Signup
        </Link>
      </p>
      <p>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/pricecard"
        >
          priceCard
        </Link>
      </p>
    </div>
  );
};

export default Navbar;
