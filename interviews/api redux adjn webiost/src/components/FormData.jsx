import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { setApiData } from "../redux/ApiSlice";

const initialValues = {
  username: "",
  email: "",
  password: "",
  phone: "",
};

function FormData() {
  const { apiData, editFormValue } = useSelector((state) => state.api);
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(initialValues);

  const submitHandler = (values) => {
    const { username, email, password, phone } = values;

    const upDatedValue = {
      id: new Date().getTime().toString(),
      username,
      email,
      password,
      phone,
    };
    dispatch(setApiData([...apiData, upDatedValue]));
  };

  useEffect(() => {
    setFormValue(initialValues);

    if (editFormValue) {
      setFormValue(editFormValue);
    }
  }, [editFormValue]);

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <Formik
            initialValues={formValue}
            onSubmit={submitHandler}
            enableReinitialize="true"
          >
            {() => (
              <Form>
                <div>
                  <Field
                    type="text"
                    name="username"
                    className="form-control mb-2"
                    placeholder="Enter Username"
                  />
                </div>
                <div>
                  <Field
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    className="form-control mb-2"
                    placeholder="Enter Password"
                  />
                </div>
                <div>
                  <Field
                    type="tel"
                    name="phone"
                    className="form-control mb-2"
                    placeholder="Enter Phone number"
                  />
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default FormData;
