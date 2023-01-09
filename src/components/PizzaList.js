import React, { useEffect, useState } from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, handleClick }) {

  // const [pizzas, setPizzas] = useState([]); //important that this is empty


  // useEffect(() => {
  //   fetch("http://localhost:3001/pizzas") //first promise
  //   .then((r) => r.json()) //second promise
  //   .then((pizzaData) => setPizzas(pizzaData)); //iteration
  // },[])

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          pizzas.map((pizza) => {
            return <Pizza key={pizza.id} {...pizza} handleClick={handleClick} />
          })
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
