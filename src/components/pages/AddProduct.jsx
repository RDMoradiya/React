import React from "react";
import { Formik, Form, Field } from "formik";
import "./AddProduct.css";

let initialValues = {
  productName: "",
  Price: "",
  Category: "",
  Quantity: "",
  file: "",
};

function AddProduct() {
  const HandleSubmit = (values) => {
    console.log(values);
    initialValues = null;
  };
  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="form-box col-md-6 m-auto p-4">
            <h4 className="text-center mb-4">Add New Product</h4>
            <Formik initialValues={initialValues} onSubmit={HandleSubmit}>
              {() => {
                return (
                  <Form className="text-center">
                    <div className="mb-3">
                      <Field
                        type="text"
                        name="productName"
                        className="form-control"
                        placeholder="Product Name"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        type="text"
                        name="Category"
                        className="form-control"
                        placeholder="Product Category"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        type="number"
                        name="Price"
                        className="form-control"
                        placeholder="Product Price in Rupees"
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        type="number"
                        name="Quantity"
                        className="form-control"
                        placeholder="Product Quantity"
                      />
                    </div>
                    <div className="mb-3 d-flex flex-wrap align-items-center">
                      <Field
                        type="file"
                        name="file"
                        className="custom-file-input w-100"
                      />
                      <div>
                        <p style={{ fontSize: "small" }}>
                          Upload Your Image here ...
                        </p>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-50">
                      Submit
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
