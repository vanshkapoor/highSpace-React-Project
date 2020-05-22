import React, { useEffect, useState } from "react";

const Detail = props => {
  let obj = props.selected;

  return (
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="https://semantic-ui.com/images/avatar/small/tom.jpg" />
        </div>
        <div class="content">
          <div class="summary">
            <a class="user font">
              {console.log(obj)}
              {obj.name}
            </a>
            <div class="date">added on {obj.date.split("T")[0]}</div>
          </div>
          <div class="extra text">
            <b>Customer ID : {obj.id}</b>
            {}
            <br />
            <b>Age : </b>
            {obj.age}
            <br />
            <b>Gender : </b>
            {obj.gender}
            <br />
            <b>Addresses : </b>
            {obj.addresses.map(add => (
              <li>{add}</li>
            ))}
            {console.log(obj)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
