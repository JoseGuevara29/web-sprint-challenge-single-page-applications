import React from "react";

export default function Pizza(props) {
  console.log(props);
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-group submit"></div>
      <h3>Fill up this form to order the pizza. Thank you.</h3>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.pizzaSize}</div>
      </div>
      <div className="name">
        <label>
          Name for the order
          <input
            name="name"
            type="text"
            className="form-input"
            value={values.name}
            onChange={onChange}
          />
        </label>
      </div>
      <div className="pizza-size">
        <label>
          Pizza Size
          <select
            name="pizzaSize"
            onChange={onChange}
            value={values.pizzaSize}
            className="form-input"
          >
            <option value="">- Select an option -</option>
            <option value="Small Six Inches">6 Inches</option>
            <option value="Medium Eight Inches">8 Inches</option>
            <option value="Large Twelve Inches">12 Inches</option>
            <option value="Extra Larger Sixteen Inches">16 Inches</option>
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
            onChange={onChange}
            checked={values.peperoni}
          />
        </label>

        <label>
          Ham
          <input
            type="checkbox"
            name="ham"
            onChange={onChange}
            checked={values.ham}
          />
        </label>

        <label>
          Pineapple
          <input
            type="checkbox"
            name="pineapple"
            onChange={onChange}
            checked={values.hineapple}
          />
        </label>
      </div>
      <label>
        Special instructions
        <input
          type="text"
          name="instructions"
          onChange={onChange}
          checked={values.instructions}
        />
      </label>
      <div className="submitButton">
        <button disabled={disabled}>submit</button>
      </div>
    </form>
  );
}
