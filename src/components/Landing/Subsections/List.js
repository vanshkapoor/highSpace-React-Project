import React from "react";
import $ from "jquery";

const List = props => {
  if (props.customers.length == 0) {
    return <div>No customers to display</div>;
  }

  const update = (e, id) => {
    e.preventDefault();
    console.log("onClick");
    props.updateData(id);
  };
  // onClick={props.updateData(data.id)}
  return (
    <div class="ui feed">
      {/* {console.log(props)} */}

      <table class="ui celled table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {props.customers.map(data => (
            <tr>
              <td onClick={e => update(e, data.id)} className="nm" data-label="Name">
                {data.id}
              </td>
              <td data-label="Age">{data.name}</td>
              <td data-label="Job">{data.age}</td>
              <td data-label="Job">{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
