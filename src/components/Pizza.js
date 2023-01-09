import React from "react";

function Pizza({ topping, id, size, vegetarian, handleClick }) {

const sendIdToApp = () => {
  handleClick(id)
}
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "yes" : "no" }</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={sendIdToApp}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
