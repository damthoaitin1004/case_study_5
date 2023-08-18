import React from "react";
import ReactDOM from "react-dom";
const SildeHome = () => {
    return (
      <div
  id="carouselExampleIndicators"
  className="carousel slide mx-auto "
  data-bs-ride="true"
  style={{ width: "100%", height: 500 }}
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src="https://phulong.com/UploadFiles/Images/FURAMA%2020%20NAM.jpg"
        className="d-block w-100"
        alt="..."
        style={{ height: 500 }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/06/Review-Furama-Resort-Da-Nang-13.jpg"
        className="d-block w-100"
        alt="..."
        style={{ height: 500 }}
      />
    </div>
    <div className="carousel-item">
      <img
        src="https://ankhangreal.vn/wp-content/uploads/2019/11/ava-ariyana-1030x515.jpg"
        className="d-block w-100"
        alt="..."
        style={{ height: 500 }}
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    );
}
export default SildeHome;
