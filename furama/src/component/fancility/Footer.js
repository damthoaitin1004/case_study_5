import React from "react";
const Footer = () => {
    return(
      <footer>
      <div className="container-fluid bg-dark text-light mt-5 pt-5">
        <div className="row px-xl-5 pt-5">
          <div className="col-lg-3 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-light text-uppercase mb-4"> FURAMA</h5>
            <p className="mb-2">
              <i
                className="fa-solid fa-location-dot fa-flip"
                style={{ color: "#e6e6e6" }}
              />{" "}
              180 Trần Hưng Đạo, Đà Nẵng, Việt Nam
            </p>
            <p className="mb-2">
              <i
                className="fa-solid fa-envelope fa-bounce"
                style={{ color: "#f4f5f5" }}
              />{" "}
              furama@gmail.com
            </p>
            <p className="mb-0">
              <i
                className="fa-solid fa-phone fa-shake"
                style={{ color: "#f1f2f3" }}
              />{" "}
              +84 868 68 68 68
            </p>
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row">
              <div className="col-md-3 mb-5">
                <h5 className="text-light text-uppercase mb-4">Công Ty</h5>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Giới thiệu
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Tuyển dụng
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Tin thời
                    trang
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Hợp tác
                    nhượng quyền
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Liên hệ
                  </a>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-light text-uppercase mb-4">
                  {" "}
                  Chính sách khách hàng
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Chính sách
                    khách hàng thân thiết
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Chính sách
                    đổi trả
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Chính sách
                    bảo hành
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Chính sách
                    bảo mật
                  </a>
                  <a
                    className="text-light mb-2"
                    href="#"
                    style={{ textDecoration: "none" }}
                  >
                    <i className="fa-solid fa-chevron-right fa-beat" /> Câu hỏi
                    thường gặp
                  </a>
                </div>
              </div>
              <div className="col-md-5 mb-5">
                <h5 className="text-light text-uppercase mb-4">
                  THAM GIA BẢNG TIN CỦA CHÚNG TÔI
                </h5>
                <form action="">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email..."
                    />
                    <div className="input-group-append">
                      <button className="btn btn-outline-light">Đăng Ký</button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  Theo dõi chúng tôi
                </h6>
                <div className="d-flex">
                  <a
                    className="btn btn-light btn-square mr-2"
                    href="#"
                    style={{ textDecoration: "none", marginRight: "0.2rem" }}
                  >
                    <i className="fa-brands fa-twitter fa-shake" />
                  </a>
                  <a
                    className="btn btn-light btn-square mr-2"
                    href="#"
                    style={{ textDecoration: "none", marginRight: "0.2rem" }}
                  >
                    <i className="fa-brands fa-facebook-f fa-bounce" />
                  </a>
                  <a
                    className="btn btn-light btn-square mr-2"
                    href="#"
                    style={{ textDecoration: "none", marginRight: "0.2rem" }}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    className="btn btn-light btn-square"
                    href="#"
                    style={{ textDecoration: "none", marginRight: "0.2rem" }}
                  >
                    <i className="fa-brands fa-square-instagram fa-flip" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 py-4"
          style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
        >
          <div className="col-md-6 px-xl-0">
            <p
              className="mb-md-0 text-center text-md-left text-secondary"
              style={{ textDecoration: "none" }}
            >
              © FURAMA LTD 180 Trần Hưng Đạo, Sơn Trà, Đà Nẵng, Việt Nam
            </p>
          </div>
          <div className="col-md-6 px-xl-0 text-center text-md-right">
            <img className="img-fluid" src="/main/img/payments.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
    
    );
}
export default Footer;