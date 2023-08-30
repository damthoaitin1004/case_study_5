import { Component, useState } from "react";
import { useNavigate } from "react-router";
import { addContract } from "../../services/ContractService";
import { Form, Formik } from "formik";
const CreateContract = () => {
    const navigate = useNavigate();
    const [customers,setCustomers]=useState([]);
    const CreateContract = async (value) => {
        const newValue = {
            ...value, typeRental: JSON.parse(value.typeRental)
        }
        console.log(newValue)
        await addContract(newValue);
               navigate("Fcontarct")
    }

    return (
        <>
        <Formik>
        <div
            className="mx-auto shadow-lg rounded p-5"
            style={{ width: "60%", marginTop: "2rem" }}
        >
            <div style={{ width: "100%" }} align="center">
                <h1 style={{ fontWeight: "bolder" }}>Create contract</h1>
            </div>
            <Form className="row g-3 mx-auto">
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Contract code
                    </label>
                    <input type="text" className="form-control" id="inputEmail4" />
                    <small style={{ color: "red" }}>validate</small>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">
                        Customer code
                    </label>
                    <input type="text" className="form-control" id="inputEmail14" />
                    <small style={{ color: "red" }}>validate</small>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Start day
                    </label>
                    <input type="date" className="form-control" id="inputPassword4" />
                    <small style={{ color: "red" }}>validate</small>
                </div>{" "}
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        End day
                    </label>
                    <input type="date" className="form-control" id="inputPassword41" />
                    <small style={{ color: "red" }}>validate</small>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Advance deposit amount
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputAddress"
                        placeholder="0.00$"
                    />
                    <small style={{ color: "red" }}>validate</small>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                        Total payment
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="inputAddress1"
                        placeholder="0.00$"
                    />
                    <small style={{ color: "red" }}>validate</small>
                </div>
                <div className="col-6 d-flex ">
                    <button
                        type="submit"
                        className="btn btn-outline-primary "
                        style={{ marginRight: "0.25rem", fontWeight: "bolder" }}
                    >
                        Create
                    </button>
                    <button
                        type="submit"
                        className="btn btn-outline-warning "
                        style={{ fontWeight: "bolder" }}
                    >
                        Cancle
                    </button>
                </div>
            </Form>
        </div>
        </Formik></>

    );
}

export default CreateContract;