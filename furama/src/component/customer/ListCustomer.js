import React, { useEffect, useState } from "react";
import { getListCustomer } from "../../services/CustomerService";
import { Link, useNavigate } from "react-router-dom";
const ListCustomer = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  useEffect(
    () => {
      loadList();
    }, []
  )
  const loadList = async () => {
    const result = await getListCustomer();
    setCustomers((prev) => result)
  }
  return (
    <div
      className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
      style={{ width: "80%" }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <h1>Customer List</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <table className="table table-light table-striped table-hover table-responsive-sm text-center">
          <tbody>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th> Day of birth</th>
              <th>Customer type</th>
              <th>Phone number</th>
              <th>Update</th>
            </tr>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.birth}</td>
                <td>{customer.customerType.name}</td>
                <td>{customer.phone}</td>
                <td>  <button className=" btn btn-outline-primary" onClick={() => {
                  navigate(`/customer/edit/${customer.id}`)
                }}>
                  Edit
                </button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>

  );
}
export default ListCustomer;