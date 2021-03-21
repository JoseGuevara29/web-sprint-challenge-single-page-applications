import React, { useState, useEffect } from "react";
import * as yup from "yup";
import validate from "./validateInfo";

export default function useFormPizza(validate) {
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
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    // setValues({ ...values, [name]: value });
    yup
      .reach(validate, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: "" });
      });
    setValues({ ...values, [name]: valueToUse });
    // [e.target.name]: e.target.value } this is the longer way of doing without the const { name, value } = e.target;
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors };
}
