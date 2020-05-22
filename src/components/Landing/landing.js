import React, { useState, useEffect } from "react";
import Boiler from "../Boiler/boiler";
import Leftnav from "../Boiler/leftnav";
import List from "./Subsections/List";
import Detail from "./Subsections/DetailView";
import { database } from "firebase";

const All = () => {
  const [selected, setSelected] = useState({});
  const [data, setData] = useState([
    { id: "121", name: "vansh", age: "12", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] },
    { id: "122", name: "varun", age: "189", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] },
    { id: "123", name: "kl", age: "12", gender: "Female", addresses: [{ address: "Delhi" }, { address: "USA" }] },
    { id: "124", name: "dhoni", age: "92", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] }
  ]);

  useEffect(() => {
    console.log(data);
    setSelected({ id: "121", name: "vansh", age: "12", gender: "Male", addresses: [{ address: "Delhi" }, { address: "USA" }] });
  }, []);

  const updateSelected = id => {
    let m = data.filter(db => db.id == id);
    setSelected(m[0]);
  };

  return (
    <div>
      <Boiler />
      <Leftnav count={data} />
      <div className="ui grid">
        <div className="row">
          <div className="two wide column "></div>

          <div className="five wide column gridcard uperrowall animated pulse">
            <h2 className="titlerecents">All Customers</h2>
            <hr />
            <List customers={data} updateData={updateSelected} />
          </div>

          <div className="three wide column gridcard uperrowall animated pulse">
            <h2 className="titlerecents">Customer Detail</h2>
            <hr />
            <Detail selected={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
