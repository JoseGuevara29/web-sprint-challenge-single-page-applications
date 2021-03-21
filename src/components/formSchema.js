import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required, please fill out.")
    .min(2, "Name must be 2 characters long"),
  pizzaSize: yup
    .string()
    .oneOf(
      [
        "Small Six Inches",
        "Medium Eight Inches",
        "Large Twelve Inches",
        "Extra Larger Sixteen Inches",
      ],
      "Pizza Size is required"
    ),
  peperoni: yup.string(),
  ham: yup.string(),
  pineapple: yup.string(),
  instructions: yup.string().trim(),
});

export default formSchema;
