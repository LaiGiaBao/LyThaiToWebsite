import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'react-bootstrap'

const HeadLayout=() =>{
    return(
        <div class="position-relative">
            <div class="row position-relative h-100 ">
                <div class="d-flex col align-items-center">
                        <div class="d-flex justify-content-center p-3">
                            <a href="#" >
                                        <StaticImage src="../../../images/layouts/logohotline.png" alt="hotline" layout="constrained"
                                        ></StaticImage>
                                    </a>
                        </div>
                </div>
                <div className="col text-center">
                <div class="row">
                    <div class="col mt-2">
                        <h4 className="text-danger fw-bold fs-5">SỞ GIÁO DỤC &amp; ĐÀO TẠO TP HỒ CHÍ MINH</h4>
                        <h1 className="text-warning fw-bold fs-1">TRƯỜNG THPT LÝ THÁI TỔ</h1>
                    </div>
                <div className="row">
                    <div className="col">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><FontAwesomeIcon icon={'home'}></FontAwesomeIcon></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse fs-6" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown align-self-center">
        <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
  Giới thiệu
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Quy định chung</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Lý Thái Tổ - vị vua...</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Ban giám hiệu</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Sơ đồ tổ chức</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </li>
        <li class="nav-item align-self-center">
        <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
  Tin Tức
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Bản tin trường</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Tin tức SGD &amp; ĐT</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Tin báo chí</Dropdown.Item>
    <Dropdown.Item href="#/action-4">Hoạt động ngoại khoá</Dropdown.Item>
    <Dropdown.Item href="#/action-5">Kỹ năng mềm</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        </li>
        <li class="nav-item">
        <a href="#" type="button" class="btn btn-primary">Tuyển sinh</a>
        </li>
        <li class="nav-item">
        <a href="#" type="button" class="btn btn-primary">Đoàn thanh niên</a>
        </li>
        <li class="nav-item">
        <a href="#" type="button" class="btn btn-primary">Thông báo</a>
        </li>
        <li class="nav-item">
        <a href="#" type="button" class="btn btn-primary">Liên hệ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    )
}
export default HeadLayout