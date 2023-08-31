import React, { useEffect, useState } from "react";
import { getListCustomer, deleteCustomer } from "../../services/CustomerService";
import {  useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const ListCustomer = () => {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {

    loadList();
  }, [page, search]
  )
  const loadList = async () => {
    const result = await getListCustomer(page, search);
    setTotalPage(Math.ceil(result.headers['x-total-count'] / 5))
    setCustomers(result.data);
  }
  const nextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1)
    }

  }
  const previosPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)

    }
  }
  const searchName = () => {
    const search = document.getElementById("search").value;
    setSearch(search);
    setPage(1);
  }
  const showDelete = (value) => {
    const swalSweetAlert = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalSweetAlert.fire({
      title: 'Are you sure?',
      text: value.name + "will be deleted !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete ',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        swalSweetAlert.fire(
          'Deleted!',
          value.name + ' has been deleted.',
          'success'
        )
        await deleteCustomer(value.id);
        loadList();
        setPage(1);
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalSweetAlert.fire(
          'Cancelled',
          'The operation has been cancelled !',
          'error'
        )
      }
    })
  }
  return (
    <div
      className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
      style={{ width: "80%" }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <h1>Customer List</h1>
      </div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <div class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search"></input>
          <button class="btn btn-outline-success" type="button" onClick={() => searchName()}>Search</button>
        </div>
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
              <th>Delete</th>
            </tr>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{(index + 1) + (page - 1) * 5}</td>
                <td>{customer.name}</td>
                <td>{customer.birth}</td>
                <td>{customer.customerType.name}</td>
                <td>{customer.phone}</td>
                <td>  <button className=" btn btn-outline-primary" onClick={() => {
                  navigate(`/customer/edit/${customer.id}`)
                }}>
                  Edit
                </button ></td>
                <td><button className="btn btn-outline-danger" onClick={() => showDelete(customer)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <button className="page-link" onClick={() => (previosPage())} style={{ color: "black" }}>
                Previous
              </button>
            </li>
            <li className="page-item">
              <span className="page-link" href="#" style={{ color: "black" }}>
                {page}/{totalPage}
              </span>
            </li>
            <li className="page-item">
              <button className="page-link" onClick={() => nextPage()
              } href="#" style={{ color: "black" }}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  );
}
export default ListCustomer;