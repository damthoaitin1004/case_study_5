import React from "react";
import ReactDOM from "react-dom";
const createService = () =>{
    return(
        <div className="row">
  <div className="col-md-3" />
  <div className="col-md-6">
    <form method="post">
      <div className="d-flex justify-content-center">
        <h1>Chỉnh sửa thông tin khách hàng</h1>
      </div>
      <div className="input-group ">
        <span
          className="input-group-text mx-auto"
          id="basic-addon1"
          style={{ width: 200 }}
        >
          Tên khách hàng
          <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div style={{ height: 20 }}>
        <small style={{ color: "red", marginLeft: "27%", paddingBottom: 10 }} />
      </div>
      <div className="input-group ">
        <span
          className="input-group-text mx-auto"
          id="basic-addon2"
          style={{ width: 200 }}
        >
          Ngày sinh
          <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
        </span>
        <input
          type="date"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div style={{ height: 20 }}></div>
      <div className="input-group mb-3 ">
        <label
          className="input-group-text mx-auto"
          htmlFor="inputGroupSelect01"
          style={{ width: 200 }}
        >
          Giới tính{" "}
          <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option>Nam</option>
          <option>Nữ</option>
        </select>
      </div>
      <div className="input-group mb-3 mx-auto">
        <span className="input-group-text" style={{ width: 200 }}>
          Số điện thoại
          <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
        </span>
        <input
          type="number"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text mx-auto" style={{ width: 200 }}>
          Địa chỉ khách hàng
          <small style={{ color: "red", marginLeft: "0.5rem" }}> *</small>
        </span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          defaultValue={""}
        />
      </div>
      <div
        className="input-group mb-3 row mx-auto"
        style={{ width: "100%", marginTop: "3%" }}
      >
        <div className="col-6" align="end">
          <button
            className="btn btn-outline-info"
            type="submit"
            style={{ width: "50%" }}
          >
            Cập nhật
          </button>
        </div>
        <div className="col-6" align="start">
          <a>
            <button
              className=" btn btn-outline-warning"
              style={{ width: "50%" }}
              type="button"
            >
              Hủy bỏ
            </button>
          </a>
        </div>
      </div>
    </form>
  </div>
  <div className="col-md-3"></div>
</div>

    );
}
export default createService;