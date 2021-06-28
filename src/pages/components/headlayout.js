import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../components/CSS/style2.module.css'

import '../components/fonts/fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const HeadLayout=() =>{
    return (
        <nav className={styles.headerNav}>
            <div className={styles.container}>
                <div className={styles.personalArea}>
                <span>
                    <a title="Đăng nhập - Đăng ký" 
                    class="pa pointer button" 
                    data-toggle="tip" 
                    data-target="#guestBlock_nv1" 
                    data-click="y"><em><FontAwesomeIcon icon={'user'}/></em><span class="hidden">Đăng nhập</span></a></span>
                </div>
                <div className={styles.socialIcons}>
                <span className={styles.visibleXsInlineBlock}>
                    <a title="Chúng tôi trên mạng xã hội" 
                    //class ="pointer button" 
                    data-toggle="tip" 
                    data-target="#socialList" 
                    data-click="y">
                        <em><FontAwesomeIcon icon={'share-alt'}/></em>
                        <span class="hidden">Chúng tôi trên mạng xã hội</span>
                    </a>
                </span>
                
                <div id="socialList" className={styles.content}>
                    <h3 className={styles.visibleXsInlineBlock}>Chúng tôi trên mạng xã hội</h3>
                    <ul className={styles.socialList}>
                        <li className={styles.socialListLi}>
                            <a href="https://www.facebook.com/Tr%C6%B0%E1%BB%9Dng-L%C3%BD-Th%C3%A1i-T%E1%BB%95-275587509571496/" 
                            target="_blank">
                                <i>
                                    <FontAwesomeIcon icon={'facebook'}/>
                                </i>
                            </a>
                        </li>
                        <li className={styles.socialListLi}>
                            <a href="https://www.youtube.com/user/nukeviet" 
                            target="_blank">
                                <i>
                                    <FontAwesomeIcon icon={'youtube'}/>
                                </i>
                            </a>
                        </li>
                        <li className={styles.socialListLi}>
                            <a href="#">
                                <FontAwesomeIcon icon={'rss'}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contactDefault}>
            <span className={styles.visibleXsInlineBlock}>
                <a title="Thông tin liên hệ" 
                    //class="pointer button" 
                data-toggle="tip" data-target="#contactList" data-click="y">
                    <em class="icon-old-phone icon-lg"></em>
                    <span class="hidden">Thông tin liên hệ</span>
                    </a>
            </span>
            <div id="contactList" class="content">
                <h3 class={styles.visibleXsInlineBlock}>Thông tin liên hệ</h3> 
                    <ul className={styles.contactList}>
                        <li className={styles.contactListLi}>
                            <em><FontAwesomeIcon icon={'phone'}/></em>&nbsp;Hotline  0903.750.569 - 0937.566.511
                        </li>
                        <li className={styles.contactListLi}>
                            <em><FontAwesomeIcon icon={'envelope'}/></em>&nbsp;<a href="#">thptlythaito@gmail.com</a>
                            </li>
                    </ul>
</div>
            </div>
            </div>
        </nav>
    )
}
export default HeadLayout