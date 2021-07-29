import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HomeNavigation from './navigationbars'
import 'bootstrap/dist/css/bootstrap.css'


const HeadLayout=() =>{
    return(
        <div class="position-relative">
            <div class="row position-relative h-100">
                <div class="col">
                        <div style={{position:'absolute',right:'60%'}}>
                            <a href="#" >
                                        <StaticImage src="../../../images/layouts/logohotline.png" alt="hotline" layout="constrained"
                                        ></StaticImage>
                                    </a>
                        </div>
                </div>
                <div className="col text-center">
                <div class="row">
                    <div class="col mt-2" style={{'font-family':'Times New Roman'}}>
                        <center style={{position: 'relative', right:'170px',top:'30px'}}>
                            <h4 className="fw-bold fs-5" style={{color:'red'}}>SỞ GIÁO DỤC &amp; ĐÀO TẠO TP HỒ CHÍ MINH</h4>
                            <h1 className="fw-bold fs-1" style={{color:'yellow'}}>TRƯỜNG THPT LÝ THÁI TỔ</h1>
                        </center>
                    </div>
                <div className="row">
                    <div className="col" style={{height:'100px',position:'relative'}}>
                    <HomeNavigation/>
                    </div>
                </div>
                </div>
                </div>
            </div>

        </div>
    )
}
export default HeadLayout