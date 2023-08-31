import React, { useEffect, useState } from "react";
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useParams, Await, useNavigate } from "react-router";
import * as FancilityServices from "../../services/FancilityServices";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { getListTypeRental } from "../../services/TypeRental";
const CreateService = () => {
  const navigate = useNavigate();
  const [typeRentals, setTypeRentals] = useState([]);
  useEffect(
    () => {
      loadListTypeRental();
    }, []
  )
  const loadListTypeRental = async () => {
    const result = await getListTypeRental();
    setTypeRentals((prev) => result)
  }
  const createService = async (value) => {
    const newValue = {
      ...value, typeRental: JSON.parse(value.typeRental)
    }
    console.log(newValue)
    
    await FancilityServices.addService(newValue);
    toast("Create success !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/")
  }
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          roomStandard: "",
          typeRental: "",
          area: "",
          capacity: "",
          poolArea: "",
          floorQuantity: "",
          fee: "",
          Description: ""
        }
        }
        onSubmit={
          async (values) => {
            await createService(values);
          }
        }
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Please is not empty!"),
          roomStandard: Yup.string().required("Please is not empty!"),
          area: Yup.number().required("Please is not empty!"),
          capacity: Yup.number().required("Please is not empty!"),
          poolArea: Yup.number().required("Please is not empty!"),
          floorQuantity: Yup.number().required("Please is not empty!"),
          fee: Yup.number().required("Please is not empty!")
        })

        }>
        <Form>
          <div className="container-fluid container-fluid d-flex justify-content-center">
            <h1>Create Service</h1>
          </div>
          <section className="container my-2 w-50 p-2 bg-light">
            <div className="row g-3 rounded shadow-lg">
              <div className="col-md-12">
                <label htmlFor="name" className="form-label">
                  Service name
                </label>
                <Field type="text" className="form-control" id="name" name="name" />
                <ErrorMessage name="name" component="span" className="text-danger" />

              </div>
              <div className="col-6">
                <label htmlFor="roomStandard" className="form-label">
                  Room standard
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="roomStandard"
                  placeholder="room standard"
                  name="roomStandard"
                />
                <ErrorMessage name="roomStandard" component="span" className="text-danger" />

              </div>
              <div className="col-md-6 ">
                <label htmlFor="typeRental" className="form-label">
                  Type rental
                </label>

                <Field as="select" className="form-select" id="typeRental" name="typeRental">
                  {
                    typeRentals.map((typeRental) => (
                      <option value={`${JSON.stringify(typeRental)}`}>{typeRental.namde}</option>
                    ))}

                </Field>
              </div>

              <div className="col-md-6">
                <label htmlFor="area" className="form-label">
                  Service area
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="area"
                  placeholder="area"
                  name="area"
                />
                <ErrorMessage name="area" component="span" className="text-danger" />

              </div>
              <div className="col-6">
                <label htmlFor="maxPersons" className="form-label">
                  Max persons
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="maxPersons"
                  placeholder="max persons"
                  name="capacity"
                />
                <ErrorMessage name="capacity" component="span" className="text-danger" />

              </div>
              <div className="col-4">
                <label htmlFor="poolArea" className="form-label">
                  Pool area
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="poolArea"
                  placeholder="pool area"
                  name="poolArea"
                />
                <ErrorMessage name="poolArea" component="span" className="text-danger" />

              </div>
              <div className="col-md-4">
                <label htmlFor="floorQuantity" className="form-label">
                  Floor quantity
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="floorQuantity"
                  placeholder="floor quantity"
                  name="floorQuantity"
                />
                <ErrorMessage name="floorQuantity" component="span" className="text-danger" />

              </div>
              <div className="col-4">
                <label htmlFor="fee" className="form-label">
                  Fee
                </label>
                <Field
                  type="number"
                  className="form-control"
                  id="fee"
                  placeholder="fee"
                  name="fee"
                />
                <ErrorMessage name="fee" component="span" className="text-danger" />

              </div>
              <div className="col-md-12">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <Field as="textarea" className="form-control" id="description" name="description" />
                <ErrorMessage name="description" component="span" className="text-danger" />

              </div>
              <div className="d-flex col-12">
                <button type="submit" className="btn btn-outline-primary w-50 ">
                  Create
                </button>
                <Link to={"/"} className="btn btn-outline-warning w-50">
                  Cancel
                </Link>
              </div>
              <div />
            </div>
          </section>
        </Form>
      </Formik>
    </>
  );
}
export default CreateService;