import React, { useState, useEffect } from "react";
import Boiler from "../Boiler/boiler";
import Leftnav from "../Boiler/leftnav";
import List from "./Subsections/List";
import Detail from "./Subsections/DetailView";
import { database } from "firebase";
import Axios from "axios";

const All = () => {
  const [selected, setSelected] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  // { id: "121", name: "vansh", age: "12", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] },
  // { id: "122", name: "varun", age: "189", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] },
  // { id: "123", name: "kl", age: "12", gender: "Female", addresses: [{ address: "Delhi" }, { address: "USA" }] },
  // { id: "124", name: "dhoni", age: "92", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] }
  useEffect(() => {
    console.log(data);
    Axios.get("https://highspace.herokuapp.com/api/user/all")
      .then(data => {
        console.log(data.data.data);
        setData(data.data.data);
        setSelected(data.data.data[0]);
        setError(false);
        setLoading(false);
      })
      .catch(err => {
        setError(true);
        setLoading(true);
      });
    // setSelected({ id: "121", name: "vansh", age: "12", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] });
  }, []);

  const updateSelected = id => {
    let m = data.filter(db => db._id == id);
    setSelected(m[0]);
  };
  if (error) {
    return (
      <div>
        <Boiler />
        <Leftnav count={data} />
        <div className="ui grid">
          <img class="errorimg" src="https://www.tallymoney.com/assets/images/404.svg"></img>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Boiler />
      <Leftnav count={data} />
      <div className="ui grid">
        <div className="row">
          <div className="two wide column "></div>

          <div className="eight wide column gridcard uperrowall2 animated pulse">
            <h2 className="titlerecents">All Customers</h2>
            <hr />
            {loading ? (
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
            ) : (
              <List customers={data} updateData={updateSelected} />
            )}
          </div>

          <div className="three wide column gridcard uperrowall animated pulse">
            <h2 className="titlerecents">Customer Detail</h2>
            <hr />
            {loading ? (
              <div class="ui active inverted dimmer">
                <div class="ui text loader">Loading</div>
              </div>
            ) : (
              <Detail selected={selected} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
