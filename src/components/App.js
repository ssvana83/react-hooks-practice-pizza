import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]); //important that this is empty\
  const [editPizza, setEditPizza] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3001/pizzas") //first promise
    .then((r) => r.json()) //second promise
    .then((pizzaData) => setPizzas(pizzaData)); //iteration
  },[])

  const handleEditButtonClick = (sentId) => {
    const foundPizza = pizzas.find((pizza) => pizza.id === sentId);
    setEditPizza(foundPizza);
  }

  

  return (
    <>
      <Header />
      <PizzaForm {...editPizza} setEditPizza={setEditPizza} />
      <PizzaList pizzas= {pizzas} handleClick={handleEditButtonClick} />
    </>
  );
}

export default App;
