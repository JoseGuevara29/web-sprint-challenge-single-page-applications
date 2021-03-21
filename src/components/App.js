import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Pizza from "./Pizza";
import Nav from "./Nav";
import ShowOrders from "./ShowOrders";
import formSchema from "./formSchema";
import axios from "axios";
import * as yup from "yup";

const initialValues = {
  ///// TEXT INPUTS /////
  name: "",
  ///// DROPDOWN /////
  pizzaSize: "",
  ///// CHECKBOXES /////
  peperoni: false,
  ham: false,
  pineapple: false,
};
const initialDisabled = true;
const initialorder = [];
const App = () => {
  const [order, setOrder] = useState(initialorder);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(initialDisabled);

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
    setValues({ ...values, [name]: value });
    // [e.target.name]: e.target.value } this is the longer way of doing without the const { name, value } = e.target;
  };
  const postNewFriend = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
      })
      .catch((err) => {
        console.log(err);
      });
    setValues(initialValues);
  };

  const formSubmit = (e) => {
    const newFriend = {
      name: values.name,
      pizzaSize: values.pizzaSize,
      toppings: ["peperoni", "ham", "pineapple"].filter(
        (topping) => values[topping]
      ),
      instructions: values.instructions,
    };
    postNewFriend(newFriend);
  };
  useEffect(() => {
    formSchema.isValid(values).then((valid) => setDisabled(!valid));
  }, [values]);

  return (
    <div className="App">
      <Nav />
      <Route
        exact
        path="/pizza"
        render={(props) => (
          <Pizza
            {...props}
            values={values}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={errors}
          />
        )}
      />
      {order.map((order) => {
        return <ShowOrders key={order.id} details={order} />;
      })}
    </div>
  );
};
export default App;
