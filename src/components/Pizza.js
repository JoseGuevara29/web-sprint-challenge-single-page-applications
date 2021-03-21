import React from "react";
import useFormPizza from "./useFormPizza";
import validate from "./validateInfo";

export default function Pizza({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useFormPizza(validate);
  //   console.log(values);

  return (
    //   onSubmit={onSubmit}
    // <h1>Test</h1>
    <form className="form container" onSubmit={handleSubmit}>
      <div className="form-group submit"></div>
      <h3>Fill up this form to order the pizza. Thank you.</h3>
      <div className="errors">
        <div>{errors.name}</div>
      </div>
      <div className="name">
        <label>
          Name for the order
          <input
            className="form-input"
            value={values.name}
            onChange={handleChange}
            name="name"
            type="text"
          />
        </label>
      </div>
      <div className="pizza-size">
        <label>
          Pizza Size
          <select
            name="pizzaSize"
            onChange={handleChange}
            value={values.pizzaSize}
            className="form-input"
          >
            <option value="">- Select an option -</option>
            <option value="sixInch">6 Inches</option>
            <option value="eightInch">8 Inches</option>
            <option value="twelveInch">12 Inches</option>
            <option value="sixteenInch">16 Inches</option>
          </select>
        </label>
      </div>
      <div className="toppings" className="form-input">
        <h4>Toppings</h4>
        <label>
          Peperoni
          <input
            type="checkbox"
            name="peperoni"
            onChange={handleChange}
            checked={values.peperoni}
          />
        </label>

        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            onChange={handleChange}
            checked={values.ham}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={handleChange}
            checked={values.hineapple}
          />
        </label>
      </div>
      <button className="form-input-btn" type="submit">
        Send Order
      </button>
    </form>
  );
}
