import { cyan } from "@material-ui/core/colors";

describe("Test Form", () => {
  //helpers
  const textInputName = () => cy.get(".name > label > .form-input");
  const textInputSpecialInstructions = () => cy.get(":nth-child(7) > input");
  const pizzaSize = () => cy.get(".pizza-size > label > .form-input");
  //   const checkBoxes = () => cy.get("div.form-input");
  const checkBoxes = () => cy.get('[type="checkbox"]');
  const submitButton = () => cy.get("button");

  it("has text on the box", () => {
    cy.visit("http://localhost:3000/pizza");
    textInputName().type("Jose");
  });
  it("can type in special instructions", () => {
    textInputSpecialInstructions().type("Order information here");
  });
  it("can select a pizza size", () => {
    pizzaSize()
      .select("6 Inches")
      .select("8 Inches")
      .select("12 Inches")
      .select("16 Inches");
  });
  it("can select multiple checkboxes/toppings ", () => {
    checkBoxes().check();
  });
  it("can submit form", () => {
    submitButton().click();
  });
});
