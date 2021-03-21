import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";

export default function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/pizza">
          <li>Order</li>
        </Link>
      </ul>
    </nav>
  );
}
