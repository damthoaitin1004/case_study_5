import React from "react";
import { useState, useEffect } from "react";
import { Form, Formik, ErrorMessage, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { getByIdService, editService } from "../../services/FancilityServices";
import { toast } from "react-toastify";
import { getListTypeRental } from "../../services/TypeRental";
function EditServices() {
  const navigate = useNavigate();
  const params = useParams();
  const [fancilities, setFancilities] = useState();
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
  const updateService = async (value) => {
    const newValue = {
      ...value, typeRental: JSON.parse(value.typeRental)
    };
    const result = await editService(newValue);
    toast("Update complete !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    navigate("/")
  }
  const loadFancilitiesDetail = async (id) => {
    const data = await getByIdService(id);
    const newData = { ...data, typeRental: `${JSON.stringify(data.typeRental)}` }
    console.log(data);
    setFancilities(newData);
  }

  useEffect(() => {
    if (params.id) {
      loadFancilitiesDetail(params.id);
    }
  }, [params]);

  if (!fancilities) {
    return null;
  }

  return (
    <>
      <Formik
        initialValues={{
          ...fancilities
        }
        }
        onSubmit={
          async (value) => {
            console.log(value)
            await updateService(value);
          }}
        validationSchema={Yup.object({
          name: Yup.string()
            .required("Please is not empty!"),
          roomStandard: Yup.string().required("Please is not empty!"),
          area: Yup.number().required("Please is not empty!"),
          capacity: Yup.string().required("Please is not empty!"),
          poolArea: Yup.number().required("Please is not empty!"),
          floorQuantity: Yup.number().required("Please is not empty!"),
          fee: Yup.number().required("Please is not empty!")
        })

        }>
        <Form>
          <div className="container-fluid container-fluid d-flex justify-content-center">
            <h1>Update Service</h1>
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
                  name="fee"
                />
                <ErrorMessage name="fee" component="span" className="text-danger" />

              </div>
              <div className="col-md-12">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <Field as="textarea" className="form-control" id="description" name="description" />
                <ErrorMessage name="description" component="span" className="text-danger" />

              </div>
              <div className="d-flex col-12">
                <button type="submit" className="btn btn-outline-primary w-50 ">
                  Update
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
export default EditServices;