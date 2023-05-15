import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginSlice";
import { useNavigate } from "react-router-dom";

const handleValidate = Yup.object().shape({
  email: Yup.string().required("Email is Require!"),
  password: Yup.number().required("Password is Require!"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(values) {
    dispatch(login({ values, navigate }));
  }

  return (
    <div className="container p-0">
      <div className="row">
        <div className="signin-form col-auto col-12 col-md-6 m-auto">
          <div className="main">
            <div className="login p-md-4">
              <label htmlFor="chk" aria-hidden="true">
                Log in
              </label>
              <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={handleValidate} enableReinitialize="true">
                {() => {
                  return (
                    <Form className="form p-md-3">
                      <div>
                        <Field className="input" type="text" name="email" placeholder="Email" />
                        <ErrorMessage className="text-danger" name="email" component="span" />
                      </div>
                      <div>
                        <Field className="input" type="password" name="password" placeholder="Password" />
                        <ErrorMessage className="text-danger" name="password" component="span" />
                      </div>
                      <button type="submit">Log in</button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
