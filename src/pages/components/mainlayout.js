import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HeadLayout from './headlayout'
import Layout2 from "./secondheadlayout"
import FootLayout from './footlayout'
import * as styles from './CSS/style2.module.css'
import MiddleLayout from "./middlelayout"

const Layout=() =>{
    return (
        <main className={styles.main}>
            <div className={styles.layout2}><Layout2/></div>
            <div className={styles.headLayout}><HeadLayout/></div>
            <div className={styles.midLayout}><MiddleLayout/></div>
            <div className={styles.footLayout}><FootLayout/></div>
            <div className={styles.leftBanner}>
                <StaticImage src="../../images/banner_left_right.jpg" alt="Banner"/>
            </div>
  
            <div className={styles.rightBanner}>
                <StaticImage src="../../images/banner_left_right.jpg" alt="Banner" />
            </div>
        </main>
    )
}
export default Layout