import React from "react";

const Leftnav = props => {
  return (
    <div class="ui left fixed vertical menu animated fadeIn countmain" style={{ zIndex: "-1" }}>
      <div class="item font ">
        Total Customers
        <br />
        <br />
        <span className="count">{props.count.length}</span>
        <br />
        <br />
        <span className="date">11 March, 2020</span>
      </div>
      <a class="item font" href="/analysis">
        Analysis
      </a>
      <a class="item font">Settings</a>
      {/* <a class="item font">Sign-in</a> */}
    </div>
  );
};

export default Leftnav;
