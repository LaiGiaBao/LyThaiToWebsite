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
                <StaticImage src="../../images/header.png"
                alt="Background"
                layout="fullWidth"
                /> 
                <div className={styles.logo}>
                    <a href="">
                        <StaticImage src="../../images/logohotline.png" alt="hotline"
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
                        <li className={styles.dropdown}>
                            <a href="#" >Giới thiệu</a>
                            <div className={styles.dropdownContent}>
                                <a href="#">Quy định chung</a>
                                <a href="#">Lý Thái Tổ - vị vua...</a>
                                <a href="#">Ban giám hiệu</a>
                                <a href="#">Sơ đồ tổ chức</a>
                            </div>
                        </li>
                        <li className={styles.dropdown}>
                            <a href="">Tin Tức</a>
                            <div className={styles.dropdownContent}>
                                <a>Bản tin trường</a>
                                <a>Tin tức SGD &amp; ĐT</a>
                                <a>Tin báo chí</a>
                                <a>Hoạt động ngoại khoá</a>
                                <a>Kỹ năng mềm</a>
                            </div>
                        </li>
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