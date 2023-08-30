import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getAllContract } from "../../services/ContractService";

const ListContract = () => {
  const navigate = useNavigate();
  const [contracts, setContracts] = useState([]);
  useEffect(
    () => {
      loadListContract();
    }, []
  )
  const loadListContract = async () => {
    const result = await getAllContract();
    setContracts(result)
  }
  return (
    <div
      className="mx-auto shadow-lg p-3 mb-5 bg-body rounded"
      style={{ width: "80%", marginTop: "2rem" }}
    >
      <div className="d-flex align-items-center justify-content-center">
        <h1>Contract list</h1>
      </div>
      <div
        className="d-flex align-items-center justify-content-center mx-auto"
        style={{ width: "90%" }}
      >
        <table className="table table-light table-bordered table-striped-columns table-hover table-responsive-sm text-center">
          <tbody>
            <tr>
              <th>#</th>
              <th>Start day</th>
              <th>End day</th>
              <th>Advance deposit amount</th>
              <th>Total payment</th>
            </tr>
            {contracts.map((contract, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{contract.start_date}</td>
                <td>{contract.end_date}</td>
                <td>{contract.deposit}$</td>
                <td>{contract.total_payment}</td>
              </tr>

            ))}
      

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

export default ListContract;