import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../components/CSS/style2.module.css'
import '../components/fonts/fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import * as bootstrap from '../components/CSS/bootstrap.non-responsive.module.css'

const HeadLayout2=() =>{
    const x=0;
    const y=0
    return(
        <main>
            <div className={styles.headBg}>
                <StaticImage src="http://thptlythaito.edu.vn/themes/default/images/header.png"
                alt="Background"
                layout="fullWidth"
                /> 
                <div className={styles.logo}>
                    <a href="">
                        <StaticImage src="http://thptlythaito.edu.vn/uploads/untitled-1_2_1.png" alt="hotline"
                        ></StaticImage>
                    </a>
                </div>
                <div className={styles.schoolName}>
                <p>SỞ GIÁO DỤC &amp; ĐÀO TẠO TP HỒ CHÍ MINH</p>
                <p>TRƯỜNG THPT LÝ THÁI TỔ</p>
                </div>
                <div className={styles.firstNav}>
                <a href="">
                    <FontAwesomeIcon icon={'home'}></FontAwesomeIcon>
                </a>
                    <ul>
                        <li><a href="#">Giới thiệu</a></li>
                        <li><a href="">Tin Tức</a></li>
                        <li><a href="">Tuyển sinh</a></li>
                        <li><a href="">Đoàn thanh niên</a></li>
                        <li><a href="">Thông báo</a></li>
                        <li><a href="">Liên hệ</a></li>
                    </ul>
                </div>
            </div>

        </main>
    )
}
export default HeadLayout2