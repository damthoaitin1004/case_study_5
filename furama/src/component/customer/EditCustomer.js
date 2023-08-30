import { useEffect, useState } from "react";
import { getByIdCustomer, editCustomer } from "../../services/CustomerService";
import * as Yup from "yup";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditCustomers = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [customer, setCustomer] = useState();
  const updateCustomer = async (value) => {
    const result = await editCustomer(value);
    console.log(result)
    navigate("/customer");
  }

  const loadCustomerDetail = async (id) => {
    const data = await getByIdCustomer(id);
    setCustomer(data);
  }
  useEffect(() => {
    if (params.id) {
      loadCustomerDetail(params.id);
    }
  }, [params]);


  if (!customer) {
    return null;
  }
  return (
    <Formik
      initialValues={
        {
          ...customer
        }
      }
      validationSchema={
        Yup.object({
          name: Yup.string().required("Please enter name, Name is not empty!"),
          birth: Yup.string().required("Please enter birth, Birth is not empty!"),
          phone: Yup.string().required("Please enter phone, Phone is not empty!"),
          iCard: Yup.string().required("Please do not leave identity card blank "),
          email: Yup.string().required("Please do not leave identity card blank ").matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Please enter in the format"),
        })
      }
      onSubmit={
        async (value) => {
          await updateCustomer(value);
          
        }
      }>
      <div className="row">
        <div className="col-md-3" />
        <div className="col-md-6 shadow-lg rounded">
          <Form >
            <div className="d-flex justify-content-center">
              <h1>Update form customer</h1>
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
              <Field name="gender" as="select" className="form-select" id="inputGroupSelect01">
                <option value={true} >Man</option>
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
      </div>
    </Formik>
  );
}
export default EditCustomers;