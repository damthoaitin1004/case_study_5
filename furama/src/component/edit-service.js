import React from "react";
import ReactDOM from "react-dom";
const CreateService = () =>{
    return(
<div>
  <div className="container-fluid container-fluid d-flex justify-content-center">
    <h1>Edit Service</h1>
  </div>
  <section className="container my-2 w-50 p-2 bg-light">
    <div className="row g-3 rounded shadow-lg">
      <div className="col-md-12">
        <label htmlFor="name" className="form-label">
          Service name
        </label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="col-6">
        <label htmlFor="roomStandard" className="form-label">
          Room standard
        </label>
        <input
          type="text"
          className="form-control"
          id="roomStandard"
          placeholder="room standard"
        />
      </div>
      <div className="col-md-6 ">
        <label className="form-label">Type</label>
        <br />
        <input className="form-check-input" type="checkbox" />
        <label>&nbsp;Year</label>
        <input className="form-check-input" type="checkbox" />
        <label>&nbsp;Month</label>
        <input className="form-check-input" type="checkbox" />
        <label>&nbsp;Day</label>
        <input className="form-check-input" type="checkbox" />
        <label>&nbsp;Hour</label>
      </div>
      <div className="col-md-6">
        <label htmlFor="area" className="form-label">
          Service area
        </label>
        <input
          type="number"
          className="form-control"
          id="area"
          placeholder="area"
        />
      </div>
      <div className="col-6">
        <label htmlFor="maxPersons" className="form-label">
          Max persons
        </label>
        <input
          type="number"
          className="form-control"
          id="maxPersons"
          placeholder="max persons"
        />
      </div>
      <div className="col-4">
        <label htmlFor="poolArea" className="form-label">
          Pool area
        </label>
        <input
          type="number"
          className="form-control"
          id="poolArea"
          placeholder="pool area"
        />
      </div>
      <div className="col-md-4">
        <label htmlFor="floorQuantity" className="form-label">
          Floor quantity
        </label>
        <input
          type="number"
          className="form-control"
          id="floorQuantity"
          placeholder="floor quantity"
        />
      </div>
      <div className="col-4">
        <label htmlFor="fee" className="form-label">
          Fee
        </label>
        <input
          type="number"
          className="form-control"
          id="Fee"
          placeholder="fee"
        />
      </div>
      <div className="d-flex col-12">
        <button type="submit" className="btn btn-outline-primary w-50 ">
          Save
        </button>
        <button type="submit" className="btn btn-outline-warning w-50">
          Cancle
        </button>
      </div>
      <div />
    </div>
  </section>
</div>

    );
}
export default CreateService;