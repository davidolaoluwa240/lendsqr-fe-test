// Modules
import React from "react";
import { useFormik } from "formik";

// Components
import { Link } from "react-router-dom";
import { Form, Input, Button } from "../../../components";

// Schemas
import { loginValidationSchema } from "../../../schemas";

// Style
import "./login.styles.scss";

// Interfaces
interface Props {
  className?: string;
}

const Login: React.FC<Props> = ({ className }) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: (_, formikHelpers): void => {
      setTimeout(() => {
        //1). Reset Login Form
        formikHelpers.resetForm();

        //2). Redirect To Dashboard
      }, 3000);
    },
  });

  return (
    <div className={`login ${className}`}>
      <div className="login__container">
        <h1 className="login__heading primary-heading is-text-primary-color">
          Welcome!
        </h1>
        <p className="login__subheading">Enter details to login.</p>
        <Form className="login__form" handleSubmit={handleSubmit}>
          <Input
            formGroupClass="login__group"
            className="login__control"
            name="email"
            placeholder="Email"
            value={values.email}
            error={errors.email || ""}
            touched={!!touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Input
            formGroupClass="login__group"
            className="login__control"
            name="password"
            type="password"
            placeholder="Password"
            value={values.password}
            error={errors.password || ""}
            touched={!!touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Link to="/auth/login" className="login__link">
            FORGOT PASSWORD?
          </Link>

          <Button
            isLoading={isSubmitting}
            disabled={!isValid || isSubmitting}
            className="login__btn btn--primary btn--sm is-width-full"
            type="submit"
          >
            LOG IN
          </Button>
        </Form>
      </div>
    </div>
  );
};

Login.defaultProps = {
  className: "",
};
export default Login;
