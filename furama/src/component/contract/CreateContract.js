import { Component, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addContract } from "../../services/ContractService";
import { Field, Form, Formik ,ErrorMessage} from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
const CreateContract = () => {
    const navigate = useNavigate();
    const createContract = async (value) => {
        await addContract(value);
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
        navigate("/contract")
    }

    return (
        <>
            <Formik
                initialValues={{
                    contract_code: "",
                    facility_code: "",
                    customer_code: "",
                    start_date: "",
                    end_date: "",
                    deposit: "",
                    total_payment:""
                }}
                onSubmit={
                    async (value) => {
                        console.log(value)
                        await createContract(value);
                    }
                }
                validationSchema={
                    Yup.object({
                        contract_code: Yup.string().required("Please is not empty!"),
                        facility_code: Yup.string().required("Please is not empty!"),
                        customer_code: Yup.string().required("Please is not empty!"),
                        start_date: Yup.string().required("Please is not empty!"),
                        end_date: Yup.string().required("Please is not empty!"),
                        deposit: Yup.number().required("Please is not empty!"),
                        total_payment: Yup.number().required("Please is not empty!"),

                    })

                }
            >
                <div
                    className="mx-auto shadow-lg rounded p-5"
                    style={{ width: "60%", marginTop: "2rem" }}
                >
                    <div style={{ width: "100%" }} align="center">
                        <h1 style={{ fontWeight: "bolder" }}>Create contract</h1>
                    </div>
                    <Form className="row g-3 mx-auto">
                        <div className="col-md-6">
                            <label htmlFor="contract_code" className="form-label">
                                Contract code
                            </label>
                            <Field type="text" className="form-control" id="contract_code" name="contract_code" />
                            <ErrorMessage name="contract_code" component="span" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="customer_code" className="form-label">
                                Customer code
                            </label>
                            <Field type="text" className="form-control" id="customer_code" name="customer_code" />
                            <ErrorMessage name="customer_code" component="span" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="facility_code" className="form-label">
                                Fancilities code
                            </label>
                            <Field type="text" className="form-control" id="customer_code" name="facility_code" />
                            <ErrorMessage name="facility_code" component="span" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="start_date" className="form-label">
                                Start day
                            </label>
                            <Field type="date" className="form-control" id="start_date" name="start_date" />
                            <ErrorMessage name="start_date" component="span" className="text-danger" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="end_date" className="form-label">
                                End day
                            </label>
                            <Field type="date" className="form-control" id="end_date" name="end_date" />
                            <ErrorMessage name="end_date" component="span" className="text-danger" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="deposit" className="form-label">
                                Advance deposit amount
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="deposit"
                                placeholder="0.00$"
                                name="deposit"
                            />
                            <ErrorMessage name="deposit" component="span" className="text-danger" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="total_payment" className="form-label">
                                Total payment
                            </label>
                            <Field
                                type="number"
                                className="form-control"
                                id="total_payment"
                                placeholder="0.00$"
                                name="total_payment"
                            />
                            <ErrorMessage name="total_payment" component="span" className="text-danger" />
                        </div>
                        <div className="col-6 d-flex ">
                            <button
                                type="submit"
                                className="btn btn-outline-primary "
                                style={{ marginRight: "0.25rem", fontWeight: "bolder" }}
                            >
                                Create
                            </button>
                            <Link
                                to={"/contract"}
                                className="btn btn-outline-warning "
                                style={{ fontWeight: "bolder" }}
                            >
                                Cancle
                            </Link>
                        </div>
                    </Form>
                </div>
            </Formik></>

    );
}

export default CreateContract;