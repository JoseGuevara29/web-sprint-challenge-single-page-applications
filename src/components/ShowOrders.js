import React from "react";

const ShowOrders = (props) => {
  console.log(props.details);
  return (
    <div className="displayedContent">
      <h1>Order information</h1>
      <p>Name on the order: {props.details.name}</p>
      <p>Pizza Size: {props.details.pizzaSize}</p>
      <p>
        Toppings:
        {props.details.toppings.map((element) => {
          // console.log(element);
          return ` ${element}`;
        })}
      </p>
      <p>Special Instructions: {props.details.instructions}</p>
    </div>
  );
};

export default ShowOrders;
