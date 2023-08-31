import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { deleteContract, getAllContract, } from "../../services/ContractService";
import Swal from "sweetalert2";

const ListContract = () => {
  const [page, setPage] = useState(1);
  const [contracts, setContracts] = useState([]);
  const [totalPage, setTotalPage] = useState();
  useEffect(
    () => {
      loadListContract();
    }, [page]
  )
  const loadListContract = async () => {
    const result = await getAllContract(page);
    setTotalPage(Math.ceil(result.headers['x-total-count'] / 5))
    setContracts(result.data)
  }
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
      text: " Contract will be deleted !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete ',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        swalSweetAlert.fire(
          'Deleted!',
          ' Contract has been deleted.',
          'success'
        )
        await deleteContract(value.id);
        loadListContract();
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
              <th>Delete</th>
            </tr>
            {contracts.map((contract, index) => (
              <tr key={index}>
                <td>{(index + 1) + (page - 1) * 5}</td>
                <td>{contract.start_date}</td>
                <td>{contract.end_date}</td>
                <td>{contract.deposit}$</td>
                <td>{contract.total_payment}</td>
                <td><button className="btn btn-outline-danger" onClick={() => showDelete()} >Delete</button></td>
              </tr>

            ))}
          </tbody>
        </table>
      </div>
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
              <button className="page-link" onClick={() => nextPage()} style={{ color: "black" }}>
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>


  );
}

export default ListContract;