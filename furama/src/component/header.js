import React from "react";
const Headers = () => {

    return (
        <>
        <header className="bg-dark" style={{ height: 60 }}>
          <div
            className="mx-auto row text-white align-items-center"
            style={{ width: "70%", height: "100%" }}
          >
            <div className="col-3">
              <div
                className="d-flex justify-content-center"
                style={{ fontFamily: '"Lexend Zetta", sans-serif' }}
              >
                <img src="love-chair.png" height={50} width={50} />
                <h1 style={{ color: "deeppink" }} className="home">
                  FURAMA
                </h1>
              </div>
            </div>
            <div className="col-9">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <form className="d-flex " role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ borderRadius: 30 }}
                    />
                    <button
                      className="btn btn-outline-light"
                      type="submit"
                      style={{ borderRadius: 30 }}
                    >
                      Search
                    </button>
                  </form>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: "white" }} href="#">
                    <i
                      className="fa-solid fa-right-to-bracket fa-beat"
                      style={{ color: "#ffffff" }}
                    />{" "}
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </>
      
    );
}
export default Headers;

