import React from "react";
import { Logo, Dashboard } from "../../../../shared";
import { Link } from "react-router-dom";
import "./style.css";
export const Header = () => {
  return (
    <nav className="navigation">
      <Logo />
      <Link to={"/"}>
        <Dashboard />
      </Link>
    </nav>
  );
};
