// Modules
import * as Yup from "yup";

// Login Validation Schema
export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email field is required"),
  password: Yup.string().required("Password field is required"),
});
