import React from "react";
import { Link } from "react-router-dom";
import "./boilder.css";

const Boiler = () => {
  const alertshow = () => {
    alert("No Sign in for the demo/assignment purpose");
  };
  return (
    <div className="ui secondary menu menutop" style={{ padding: "2px 42px 4px 38px", background: "white", boxShadow: "1px 1px 8px -4px grey" }}>
      <Link to="/" className="item head">
        The High Space
      </Link>
      <Link to="/" className="item ">
        Customers
      </Link>
      <div className="right menu">
        <div className="item">
          <div className="ui icon input">
            <input type="text" placeholder="Search..." />
            <i className="search link icon"></i>
          </div>
        </div>
        <a className="ui item">
          <button class="ui button" onClick={alertshow}>
            <i class="user icon"></i>
            Logout
          </button>
        </a>
      </div>
    </div>
  );
};

export default Boiler;
