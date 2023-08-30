import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';
import * as Customers from "../../services/CustomerService"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { getListCutomerType } from "../../services/CustomerTypeService";
const CreateCustomer = () => {
  const navigate = useNavigate();
  const [customerTypes, setCustomerTypes] = useState([]);
  useEffect(
    () => {
      loadListCustomerType();
    }, []
  )
  const loadListCustomerType = async () => {
    const result = await getListCutomerType();
    setCustomerTypes((prev) => result)
  }
  const addCustomer = async (value) => {
    const newValue = {
      ...value, customerType: JSON.parse(value.customerType)
    }
    await Customers.addCustomer(newValue);
    navigate("/customer")
  }
  return (
    <>
      <Formik
        initialValues={
          {
            name: "",
            birth: "",
            gender: true,
            phone: "",
            iCard: "",
            customerType: "",
            email: "",
            address: ""
          }
        }
        onSubmit={
          async (value) => {
            await addCustomer(value);
          }
        }
        validationSchema={
          Yup.object({
            name: Yup.string().required("Please enter name, Name is not empty!"),
            birth: Yup.string().required("Please enter birth, Birth is not empty!"),
            phone: Yup.string().required("Please enter phone, Phone is not empty!").matches(/^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/, "Please enter in the format"),
            iCard: Yup.string().required("Please do not leave identity card blank "),
            email: Yup.string().required("Please do not leave identity card blank ").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter in the format"),

          })
        }>
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6 shadow-lg rounded">
            <Form >
              <div className="d-flex justify-content-center">
                <h1>Create form customer</h1>
              </div>
              <div className="input-group ">
                <span
                  className="input-group-text mx-auto"
                  id="basic-addon1"
                  style={{ width: 200 }}
                >
                  Name<small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="name"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="name" style={{ marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div className="input-group ">
                <span
                  className="input-group-text mx-auto"
                  id="basic-addon2"
                  style={{ width: 200 }}
                >
                  Day of birth
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  type="date"
                  className="form-control"
                  placeholder="Username"
                  name="birth"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="birth" style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div className="input-group mb-3 ">
                <label
                  className="input-group-text mx-auto"
                  htmlFor="inputGroupSelect01"
                  style={{ width: 200 }}
                >
                  Gender
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </label>
                <Field as="select" className="form-select" id="inputGroupSelect01" name="gender">
                  <option value={true}>Man</option>
                  <option value={false}>Women</option>
                </Field>
              </div>
              <div className="input-group  mx-auto">
                <span className="input-group-text" style={{ width: 200 }}>
                  Phone number
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  type="text"
                  className="form-control"
                  name="phone"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="phone" style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div className="input-group  mx-auto">
                <span className="input-group-text" style={{ width: 200 }}>
                  Identity card
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  type="text"
                  className="form-control"
                  name="iCard"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="iCard" style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div className="input-group ">
                <span
                  className="input-group-text mx-auto"
                  id="basic-addon3"
                  style={{ width: 200 }}
                >
                  Email<small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  type="email"
                  className="form-control"
                  id="basic-url"
                  name="email"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="email" style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div className="input-group mb-3 ">
                <label
                  className="input-group-text mx-auto"
                  htmlFor="inputGroupSelect01"
                  style={{ width: 200 }}
                >
                  Customer type
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </label>
                <Field as="select" className="form-select" id="inputGroupSelect01" name="customerType">
                  {
                    customerTypes.map((customerType) => (
                      <option value={`${JSON.stringify(customerType)}`}>{customerType.name}</option>
                    ))}


                </Field>
              </div>
              <div className="input-group">
                <span className="input-group-text mx-auto" style={{ width: 200 }}>
                  Address
                  <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
                </span>
                <Field
                  as="textarea"
                  className="form-control"
                  aria-label="With textarea"
                  name="address"
                />
              </div>
              <div style={{ height: 20, color: "red" }}>
                <ErrorMessage name="address" style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
              </div>
              <div
                className="input-group mb-3 row mx-auto"
                style={{ width: "100%", marginTop: "3%" }}
              >
                <div className="col-6" align="end">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    style={{ width: "50%" }}
                  >
                    Save
                  </button>
                </div>
                <div className="col-6" align="start">
                  <a>
                    <Link
                      className=" btn btn-outline-warning"
                      style={{ width: "50%" }}
                      to={"/customer"}
                    >
                      Cancle
                    </Link>
                  </a>
                </div>
              </div>
            </Form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </Formik>
    </>
  );
}
export default CreateCustomer;