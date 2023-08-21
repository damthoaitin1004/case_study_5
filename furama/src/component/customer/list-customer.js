import React from "react";
import ReactDOM from "react-dom";
const ListCustomer = () =>{
    return(
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
                <th>STT</th>
                <th>Tên khách hàng</th>
                <th> Ngày tháng năm sinh</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Sửa</th>
                <th>Xóa</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Đàm Thoại Tin</td>
                <td>10/05/1997</td>
                <td>Sơn Trà Đà Nẵng</td>
                <td>0226448798</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary border border-dark"
                    data-bs-toggle="modal"
                  >
                    Sửa
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger border border-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nguyễn Văn Quân </td>
                <td>10/05/1999</td>
                <td>Sơn Trà Đà Nẵng</td>
                <td>0226448798</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-primary border border-dark"
                  >
                    Sửa
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger border border-dark"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}
export default ListCustomer;