import React from "react";
import "./AddProduct.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/ProductSlice";
import { useNavigate } from "react-router-dom";

let initialValues = {
  name: "",
  category: "",
  price: "",
  qty: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const HandleSubmit = (values) => {
    dispatch(createProduct(values));
    navigate("/product-list");
  };

  const formValidation = Yup.object().shape({
    name: Yup.string().required("Product-Name is Required"),
    price: Yup.number()
      .required("Product-Price is Required")
      .min(10, "Min price Rs.10"),
    category: Yup.string().required("Product-Category is Required"),
    qty: Yup.number()
      .required("Product-Qty is Required")
      .min(1, "Qty Between 1-100")
      .max(100, "Qty Between 1-100"),
  });

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="form-box col-md-6 m-auto p-4">
            <h4 className="text-center mb-4">Add New Product</h4>
            <Formik
              initialValues={initialValues}
              onSubmit={HandleSubmit}
              validationSchema={formValidation}
            >
              {() => {
                return (
                  <Form>
                    <div className="mb-2">
                      <Field
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Product Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="span"
                        className="text-danger"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        as="select"
                        name="category"
                        className="form-control"
                        placeholder="Product Category"
                      >
                        <option value="default">-- Select Category--</option>
                        <option value="Samsung">Samsung</option>
                        <option value="Apple">Apple</option>
                        <option value="Vivo">Vivo</option>
                        <option value="Oppo">Oppo</option>
                        <option value="One-Plus">One-Plus</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="span"
                        className="text-danger"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Product Price in Rupees"
                      />
                      <ErrorMessage
                        name="price"
                        component="span"
                        className="text-danger"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="mb-2">
                      <Field
                        type="number"
                        name="qty"
                        className="form-control"
                        placeholder="Product Quantity"
                      />
                      <ErrorMessage
                        name="qty"
                        component="span"
                        className="text-danger"
                        style={{ fontSize: "12px" }}
                      />
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary w-50">
                        Submit
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
