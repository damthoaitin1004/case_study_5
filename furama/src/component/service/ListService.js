import React, { useEffect, useState } from "react";
import { getAll } from "../../services/FancilityServices";
const ListService = () => {
  const [services, setServices] = useState([]);
  useEffect(
    () => {
      loadServiceList();
    }, []
  )
  const loadServiceList = async () => {
    const result = await getAll();
    setServices((prev) => result);
  };
  return (
    <>
      <div className="container-fluid " style={{ marginTop: "6%" }}>
        <div className="mx-auto row" style={{ width: "90%" }}>
          {services.map((facility) => (
            <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
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
                    <a href="#" className="card-link">
                      <button className=" btn btn-outline-primary">Update</button>
                    </a>
                    <a href="#" className="card-link">
                      <button
                        className=" btn btn-outline-danger"
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
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

          {/* <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">OCEAN STUDIO SUITE</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDLEg_UYQOUE1s1b3HdiR5F9Eq3by8HdzFM3P_NaNNgdQgR9wyQziaBpWAXuK44icWu4&usqp=CAU"
              />
              <div className="card-body">
                <h5 className="card-title">OCEAN DELUXE</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Furama_Ocean_Deluxe-2-370x239.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">LAGOON SUPERIOR</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">GARDEN SUPERIOR</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://furamavietnam.com/wp-content/uploads/2018/08/Vietnam_Danang_Furama_Villas_Pool_Villas_Twin-Bedroom-1047x563.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">GARDEN DELUXE</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg"
              />
              <div className="card-body">
                <h5 className="card-title">PRESIDENTIAL SUITE</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5" style={{ height: 400 }}>
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO1e6oO8REi6g5Lc8e6aAoMZTteeGCbwbDXkNTolSP_p6aNeJXmDSEw5TtSdu7qFdxR9Q&usqp=CAU"
              />
              <div className="card-body">
                <h5 className="card-title">BEACH FRONT VILLAS</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 pb-5">
            <div className="card" style={{ width: "25rem" }}>
              <img
                style={{ width: "100%", height: 200 }}
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/128145956.jpg?k=4269254c37b76f9aa1ac914dcfcce2f07bb7aed375cce4ae8631bd670266bbc8&o=&hp=1"
              />
              <div className="card-body">
                <h5 className="card-title">POOL VILLAS</h5>
                <small className="card-text col-6">
                  Room size 85.8 m<sup>2</sup>
                </small>
                <div style={{ marginTop: "3%" }}>
                  <a href="#" className="card-link">
                    <button className=" btn btn-outline-primary">Update</button>
                  </a>
                  <a href="#" className="card-link">
                    <button
                      className=" btn btn-outline-danger"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </>



  );
}
export default ListService;