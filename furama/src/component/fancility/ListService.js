import React, { useEffect, useState } from "react";
import * as FancilityServices from "../../services/FancilityServices";
import { useNavigate } from "react-router-dom";
import SildeHome from "./SlideHome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ListService = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPage, setTotalPage] = useState();
  const [services, setServices] = useState([]);
  useEffect(
    () => {
      loadServiceList();
    }, [page, search]
  )
  const loadServiceList = async () => {
    const result = await FancilityServices.getAll(page, search);
    setTotalPage(Math.ceil(result.headers['x-total-count'] / 5));
    setServices((prev) => result.data);
  };
  const nextPage = () => {
    if (page < totalPage) {
      setPage((prev) => prev + 1);
    }
  }
  const previosPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  }
  const searchName = () => {
    const search = document.getElementById("search").value;
    setSearch(search);
    setPage(1);
  }
  const deleteService = (value) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Warning the operation will not be completed !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete ' + value.name,
      cancelButtonText: 'No, keep ' + value.name
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'The operation was successful !',
          'success'
        );
        await FancilityServices.deleteService(value.id);
        loadServiceList();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'The operation has been cancelled ',
          'error'
        )
      }
    })

  }
  return (
    <>
      <SildeHome />
      <div className="container-fluid " style={{ marginTop: "6%" }}>
        <div className="d-flex justify-content-center mb-3 ">
          <div><h1>Fancilities list</h1></div>
        </div>
        <div className="d-flex justify-content-center mb-3 ">
          <div className="d-flex" role="search"><input type="form-control me-2" id="search" placeholder=" Enter name fancilities"/>
          <button className="btn btn-outline-success"  onClick={()=>searchName()}>search</button></div>

        </div>
        <div className="mx-auto row" style={{ width: "90%" }}>
          {services.map((facility) => (
            <div className="col-lg-4 col-md-4 col-sm-6 pb-5" key={facility.id}>
              <div className="card" style={{ width: "25rem" }}>
                <img
                  style={{ width: "100%", height: 200 }}
                  src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/160407105.jpg?k=9db3214928c5013d29fe7e34e8f741c0e52c6907960385cfa045a766ee6f8731&o=&hp=1"
                />
                <div className="card-body">
                  <h5 className="card-title">{facility.name}</h5>
                  <small className="card-text col-6">
                    Room size {facility.area}<sup>2</sup>
                  </small>
                  <div style={{ marginTop: "3%" }}>
                    <button className="card-link btn btn-outline-primary" onClick={() => {
                      navigate(`/fancility/edit/${facility.id}`)
                    }}>
                      Edit
                    </button>
                    <a href="#" className="card-link">
                      <button
                        className=" btn btn-outline-danger"
                        type="button"
                        onClick={() => {
                          deleteService(facility)
                        }}
                      >
                        Delete
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          ))

          }
          <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={() => previosPage()} style={{ color: "black" }}>
                    Previous
                  </button>
                </li>
                <li className="page-item">
                  <span className="page-link" style={{ color: "black" }}>
                    {page}/{totalPage}
                  </span>
                </li>
                <li className="page-item">
                  <a className="page-link" onClick={() => nextPage()} style={{ color: "black" }}>
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      </div >
    </>



  );
}
export default ListService;