import * as yup from "yup";

const validateInfo = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is required, please fill out.")
    .min(2, "Name must be 2 characters long"),
});

export default validateInfo;
