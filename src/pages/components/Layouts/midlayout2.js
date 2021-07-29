import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Video from "../video";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import * as tableStyle from '../CSS/tables.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const MidLayout2 = ({ children }) => {
  const date = new Date();
  return (
    <div className="container-md shadow-lg p-3 mb-5 bg-body rounded border w-75 position-relative mt-5">
      <div clasName="row align-items-start" style={{backgroundColor:"#eeeeee"}}>
        <div class="col" style={{display:'inline'}}>
        <form class="row g-3">
          <div class="col-3">
          {date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+", "+date.getHours()+":"+date.getUTCMinutes()}
          </div>
          <div class="col-6"/>
          <div class="col-3 d-flex end-0" >
          <input class="form-control" type="search" placeholder="Tìm kiếm..." aria-label="Tìm kiếm"/>
        <button class="btn btn-primary" type="submit"><FontAwesomeIcon icon={faSearch}/></button>
          </div>
        </form>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div class="row">
            <div class="col">
              <StaticImage
                src="../../../images/layouts/postleft.jpg"
                alt="poster ben trai"
                class="pt-2 pb-2"
              />
            </div>
          </div>
          <div class="row">
            <div class={"col",tableStyle.traCuu}>
              <table>
                <thead>
                  <div>⇒Tra cứu</div>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <StaticImage src="../../../images/layouts/icon-tracuu-diemhocky.png" />
                      <StaticImage src="../../../images/layouts/icon-tracuu-thoikhoabieu.png" />
                      <StaticImage src="../../../images/layouts/icon-tracuu-lichthi.png" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6">
          <StaticImage src="../../../images/layouts/banner_giua.jpg" alt="banner giua" />
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
                <thead className="table-bordered text-start" style={{  'background-image': 'linear-gradient(#dddddd, #f4f4f4)'}}>
                  <div style={{padding:'5px'}}>Video hoạt động</div>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/fI-mZkcpgnI"
                        videoTitle="Giới thiệu trường"
                      />
                      <Video
                        videoSrcURL="https://www.youtube.com/embed/VeTcqtTYH48"
                        videoTitle="Giới thiệu trường"
                      />
                                          <Video
                        videoSrcURL="https://www.youtube.com/embed/CJJoiat0VII"
                        videoTitle="Lễ tri ân"
                      />
                    </td>
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
                  <td>
                    <a href="#">
                      <StaticImage src="../../../images/layouts/co-cau-to-chuc.jpg" alt="co cau to chuc"/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <StaticImage src="../../../images/layouts//bannerlichcongtac300x96.jpg" alt="lich cong tac" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <StaticImage src="../../../images/layouts/banner-tra-cuu.png" alt="tra cuu"/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="#">
                      <StaticImage src="../../../images/layouts/cuuhocsinh.png" alt="cuu hoc sinh"/>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div class="col">
              <form className="form border rounded-top" >
                <legend className="fs-4 text-light text-start" style={{'background-color':'#4088c5',padding: '5px'}}>
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
