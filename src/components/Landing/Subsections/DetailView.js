import React, { useEffect, useState } from "react";
import $ from "jquery";

const Detail = props => {
  const [address, setAddress] = useState([]);
  let obj = props.selected;
  // let address = props.selected.addresses;
  useEffect(() => {
    // setAddress(props.selected.addresses);
  }, []);
  return (
    <div class="ui feed">
      <div class="event">
        <div class="label">
          <img src="https://semantic-ui.com/images/avatar/small/tom.jpg" />
        </div>
        <div class="content">
          <div class="summary">
            <a class="user font">
              {/* Kunal Raghav */}
              {console.log(obj)}
              {obj.name}
            </a>
            <div class="date">added on 12-2-20</div>
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
            {/* {console.log(address)} */}
            {/* {console.log(typeof address)} */}
            {/* {props.selected.addresses.map(ad => (
              <p>{ad.address}</p>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
