import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StaticImage } from "gatsby-plugin-image";

const HeadLayout = () => {
  return (
    <div class="position-relative">
      <nav className="navbar navbar-dark">
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link active text-light"
              aria-current="page"
              href="#"
            >
              <em>
                <FontAwesomeIcon icon={"phone"} />
              </em>
              &nbsp;Hotline 0903.750.569 - 0937.566.511
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <a href="#" className="stretch-link link-light">
                <em>
                  <FontAwesomeIcon icon={"envelope"} />
                </em>
                &nbsp;thptlythaito@gmail.com
              </a>
            </a>
          </li>
        </ul>
        <div class="position-absolute end-0">
          <ul className="nav m-2 gap-3 end-0">
            <li>
              <a
                href="https://www.facebook.com/Tr%C6%B0%E1%BB%9Dng-L%C3%BD-Th%C3%A1i-T%E1%BB%95-275587509571496/"
                target="_blank"
              >
                <em>
                  <FontAwesomeIcon
                    icon={["fab", "facebook-square"]}
                    color="white"
                  ></FontAwesomeIcon>
                </em>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/nukeviet" target="_blank">
                <em>
                  <FontAwesomeIcon
                    icon={["fab", "youtube-square"]}
                    color="white"
                  />
                </em>
              </a>
            </li>
            <li>
              <a href="#">
                <em>
                  <FontAwesomeIcon icon={"rss"} color="white" />
                </em>
              </a>
            </li>
            <li>
              <span>
                <a
                  title="Đăng nhập - Đăng ký"
                  data-toggle="tip"
                  data-target="#guestBlock_nv1"
                  data-click="y"
                  href="#"
                >
                  <em>
                    <FontAwesomeIcon icon={"user"} color="white" />
                  </em>
                </a>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeadLayout;
