import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import HeadNav from "./headnav";
import HeadLayout from "./secondheadlayout2";
import FootLayout from "./footlayout";
import MidLayout2 from "./midlayout2";
import "bootstrap/dist/css/bootstrap.css";

const Layout = ({ children }) => {
  return (
    <div className="container-fluid position-relative">
      <div className="row">
        <div class="col" style={{'background-image': 'linear-gradient(#4188c6, #285d8b)'}}>
          <HeadNav/>
        </div>
      </div>
      <StaticImage
        src="../../../images/layouts/header.png"
        alt="Background"
        className="position-absolute w-100 start-0"
        layout="constrained"
        height={200}
      />
      <div className="row">
        <div class="col">
          <HeadLayout />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <MidLayout2>{children}</MidLayout2>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <StaticImage
            src="../../../images/layouts/banner_left_right.jpg"
            alt="Banner"
            width={120}
            style={{left:'70px',top:'100px', position:'fixed'}}
          />
        </div>
        <div className="col-8" />
        <div className="col">
          <StaticImage
            src="../../../images/layouts/banner_left_right.jpg"
            alt="Banner"
            className="position-fixed" 
            width={120}
            style={{right:'70px',top:'100px', position:'fixed'}}
          />
        </div>
      </div>

      <div className="row bg-primary">
        <div class="col">
          <FootLayout />
        </div>
      </div>
    </div>
  );
};
export default Layout;

