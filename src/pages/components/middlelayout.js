import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from '../components/CSS/style2.module.css'
import '../components/fonts/fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'

const MiddleLayout=()=>{
    return(
        <StaticImage src="../../images/banner_giua.jpg"></StaticImage> 
    )
}
export default MiddleLayout;