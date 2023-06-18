import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const getStyle = ({ isActive }) =>
    isActive ? { border: "2px solid red" } : {};
  return (
    <nav>
      <NavLink style={getStyle} to="/">
        Home
      </NavLink>
      <NavLink style={getStyle} to="/archive">
        Archives
      </NavLink>
    </nav>
  );
};

export default Header;
