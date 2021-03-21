import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import Pizza from "./Pizza";

export default function Nav(props) {
  //   console.log(props);
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
