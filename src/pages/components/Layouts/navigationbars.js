import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'react-bootstrap'
import * as styles from '../CSS/navigation.module.css'
export default function HomeNavigation() {
    return (
<div>
<nav class={"navbar", styles.navBar} style={{position: 'absolute', right:'137px',top:'50px'}}>
    <ul className=" ">
       <li><a href="/"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a></li>
       <li>
           <div>
               <Dropdown>
               <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color: 'gray',}}>Giới thiệu</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Quy định chung</Dropdown.Item>
                    <Dropdown.Item href="/">Lý Thái Tổ - vị vua...</Dropdown.Item>
                    <Dropdown.Item href="/">Ban giám hiệu</Dropdown.Item>
                    <Dropdown.Item href="/">Sơ đồ tổ chức</Dropdown.Item>
                </Dropdown.Menu>
               </Dropdown>
            </div>
        </li>
       <li>
           <div>
               <Dropdown>
               <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{color: 'gray',}}>Tin tức</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="/">Bản tin trường</Dropdown.Item>
                    <Dropdown.Item href="/">Tin tức SGD & ĐT</Dropdown.Item>
                    <Dropdown.Item href="/">Tin báo chí</Dropdown.Item>
                    <Dropdown.Item href="/">Hoạt động ngoại khoá</Dropdown.Item>
                    <Dropdown.Item href="/">kĩ năng mềm</Dropdown.Item>
                </Dropdown.Menu>
               </Dropdown>
            </div>
        </li>
       <li><a href="/">Tuyển sinh</a></li>
       <li><a href="/">Đoàn thanh niên</a></li>
       <li><a href="/">Thông báo</a></li>
       <li><a href="/">Liên hệ</a></li> 
    </ul>
</nav>
</div>
    )
}
