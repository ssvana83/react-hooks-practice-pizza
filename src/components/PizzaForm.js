import React, { useState } from "react";

function PizzaForm({ id, topping, size, vegetarian }) {

  
  const handleSubmit = (e) => {
    e.target.preventDefault();

      fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
  })
      .then(r => r.json())
      .then((newData) => console.log(newData));
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value = {topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked = {vegetarian ? true : false}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked = {vegetarian ? false: true}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
