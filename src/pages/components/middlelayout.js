import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../components/CSS/style2.module.css'
import '../components/fonts/fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import Video from '../components/video'

const MiddleLayout=()=>{
    return(
        <main>
            <div className={styles.midBanner}>
                <StaticImage src="../../images/banner_giua.jpg"></StaticImage>
            </div>
            <div className={styles.leftMidBanner}>
            <StaticImage src="../../images/postleft.jpg"></StaticImage> 
                </div>
            <table className={styles.videoContainer}>
                <thead><tr><th>Video hoạt động</th></tr></thead>
                <tbody>
                    <tr>
                        <Video
                        videoSrcURL="https://www.youtube.com/embed/fI-mZkcpgnI"
                        videoTitle="Giới thiệu trường"/>
                    </tr>
                    <tr>
                        <Video
                        videoSrcURL="https://www.youtube.com/embed/VeTcqtTYH48"
                        videoTitle="Giới thiệu trường"/>
                    </tr>
                    <tr>
                        <Video
                        videoSrcURL="https://www.youtube.com/embed/CJJoiat0VII"
                        videoTitle="Lễ tri ân"/>
                    </tr>
                </tbody>
            </table>
            <table className={styles.traCuuContainer}>
                <thead><tr><th><FontAwesomeIcon icon={'arrow-right'}/> Tra cứu</th></tr></thead>
                <tbody>
                    <tr>
                        <StaticImage src="../../images/icon-tracuu-diemhocky.png"/>
                    </tr>
                    <tr>
                        <StaticImage src="../../images/icon-tracuu-lichthi.png"/>
                    </tr>
                    <tr>
                        <StaticImage src="../../images/icon-tracuu-thoikhoabieu.png"/>
                    </tr>
                </tbody>
            </table>
            <table className={styles.navTable}>
                <tr>
                    <a href="#">
                        <StaticImage src="../../images/co-cau-to-chuc.jpg"/>
                    </a>
                </tr>
                <tr>
                    <a href="#">
                        <StaticImage src="../../images/bannerlichcongtac300x96.jpg"/>
                    </a>
                </tr>
                <tr>
                    <a href="#">
                        <StaticImage src="../../images/banner-tra-cuu.png"/>
                    </a>
                </tr>
                <tr>
                    <a href="#">
                        <StaticImage src="../../images/cuuhocsinh.png"/>
                    </a>
                </tr>
            </table>
        </main>
        
    )
}
export default MiddleLayout;