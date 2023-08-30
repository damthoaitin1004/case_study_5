import React from "react";
import { Link } from "react-router-dom";
const headers = () => {

  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg mx-auto " style={{ width: "80%" }} >
          <div className="container-fluid">
            <img src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png" style={{ width: "4%", height: "50px" }} />
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item" style={{ marginRight: "30%" }}>
                <h1>Furama</h1>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={"/"}
                  >
                    Fancility
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/fancility/create"}>
                        Create fancilities
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/"}>
                        List fancilities
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={"/"}
                  >
                    Customer
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/customer/create"}>
                        Create customer
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/customer"}>
                        List customer
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    to={"/"}
                  >
                    Contract
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/contract/create"}>
                        Create contract
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/contract"}>
                        List contract
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </header>
    </>

  );
}
export default headers;

