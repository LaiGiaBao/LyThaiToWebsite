import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../video";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";

const MidLayout2 = ({ children }) => {
  return (
    <div className="container-md shadow-lg p-3 mb-5 bg-body rounded border w-75 position-relative mt-5">
      <div className="row">
        <div className="col">
          <div class="row">
            <div class="col">
              <StaticImage
                src="../../../images/layouts/postleft.jpg"
                class="pt-2 pb-2"
              />
            </div>
          </div>
          <div class="row">
            <div class="col">
              <table className="table table-bordered border">
                <thead className="table bg-primary text-light">
                  <h4 className="fs-6 text-center">Tra cứu</h4>
                </thead>
                <tbody>
                  <tr>
                    <StaticImage src="../../../images/layouts/icon-tracuu-diemhocky.png" />
                  </tr>
                  <tr>
                    <StaticImage src="../../../images/layouts/icon-tracuu-lichthi.png" />
                  </tr>
                  <tr>
                    <StaticImage src="../../../images/layouts/icon-tracuu-thoikhoabieu.png" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6">
          <StaticImage src="../../../images/layouts/banner_giua.jpg" />
          <div className="row">
            <div className="col">
              <Carousel fade>
                <Carousel.Item>
                  <StaticImage
                    className="d-block w-100"
                    src="../../../images/layouts/img_3322.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    className="d-block w-100"
                    src="../../../images/layouts/lekhaigiang2020.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    className="d-block w-100"
                    src="../../../images/layouts/trangram2020.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <StaticImage
                    className="d-block w-100"
                    src="../../../images/layouts/z2596465406389_a89265b04c743faa40a99395d8b3f0af.jpg"
                    alt="Forth slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          <div class="row">
            <div class="col">{children}</div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div class="col">
              <table className="table table-bordered border border-3">
                <thead className="bg-light bg-gradient table-bordered text-start">
                  Video hoạt động
                </thead>
                <tbody>
                  <tr>
                    <Video
                      videoSrcURL="https://www.youtube.com/embed/fI-mZkcpgnI"
                      videoTitle="Giới thiệu trường"
                    />
                  </tr>
                  <tr>
                    <Video
                      videoSrcURL="https://www.youtube.com/embed/VeTcqtTYH48"
                      videoTitle="Giới thiệu trường"
                    />
                  </tr>
                  <tr>
                    <Video
                      videoSrcURL="https://www.youtube.com/embed/CJJoiat0VII"
                      videoTitle="Lễ tri ân"
                    />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <a href="#">
                    <StaticImage src="../../../images/layouts/co-cau-to-chuc.jpg" />
                  </a>
                </tr>
                <tr>
                  <a href="#">
                    <StaticImage src="../../../images/layouts//bannerlichcongtac300x96.jpg" />
                  </a>
                </tr>
                <tr>
                  <a href="#">
                    <StaticImage src="../../../images/layouts/banner-tra-cuu.png" />
                  </a>
                </tr>
                <tr>
                  <a href="#">
                    <StaticImage src="../../../images/layouts/cuuhocsinh.png" />
                  </a>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div class="col">
              <form className="form  border border-primary rounded">
                <legend className="fs-4 bg-primary rounded text-light text-center">
                  Thăm dò ý kiến
                </legend>
                <h4 className="fs-6 m-2">
                  Anh/Chị có hài lòng với cơ sở vật chất của trường?
                </h4>
                <div className="mb-3 form-check m-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />{" "}
                  <label className="form-check-label" for="flexRadioDefault1">
                    &nbsp;Chất lượng rất tốt
                  </label>
                </div>
                <div className="mb-3 form-check m-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  />{" "}
                  <label className="form-check-label" for="flexRadioDefault2">
                    &nbsp;Chất lượng tương đối tốt
                  </label>
                </div>
                <div className="mb-3 form-check m-2">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="flexRadioDefault"
                    id="flexRadioDefault3"
                  />{" "}
                  <label className="form-check-label" for="flexRadioDefault3">
                    &nbsp;Trung bình
                  </label>
                </div>
                <button className="btn btn-success btn-sm m-2">
                  Bình chọn
                </button>
                <button className="btn btn-primary btn-sm m-2">Kết quả</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MidLayout2;
