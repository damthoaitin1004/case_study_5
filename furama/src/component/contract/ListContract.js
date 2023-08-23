import { Component } from "react";
class ContractList extends Component {
    render() {
        return (
            <div
            className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
            style={{ width: "80%", marginTop: "2rem" }}
          >
            <div className="d-flex align-items-center justify-content-center">
              <h1>Customer List</h1>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mx-auto"
              style={{ width: "90%" }}
            >
              <table className="table table-light table-bordered table-striped-columns table-hover table-responsive-sm text-center">
                <tbody>
                  <tr>
                    <th>Number contracts</th>
                    <th>Start day</th>
                    <th>End day</th>
                    <th>Advance deposit amount</th>
                    <th>Total payment</th>
                  </tr>
                  <tr>
                    <td>CT-001</td>
                    <td>12-03-2023</td>
                    <td>12-04-2023</td>
                    <td>1200000</td>
                    <td>1800000</td>
                  </tr>
                  <tr>
                    <td>CT-002</td>
                    <td>24-05-2023</td>
                    <td>12-06-2023</td>
                    <td>1200000</td>
                    <td>1800000</td>
                  </tr>
                  <tr>
                    <td>CT-003</td>
                    <td>12-05-2023</td>
                    <td>12-07-2023</td>
                    <td>1200000</td>
                    <td>1800000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" style={{ color: "black" }}>
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <span className="page-link" href="#" style={{ color: "black" }}>
                      1/2
                    </span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" style={{ color: "black" }}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          

        );
    }
}
export default ContractList;