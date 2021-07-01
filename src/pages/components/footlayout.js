import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './CSS/style2.module.css'

const FootLayout =() =>{
    return(
        
        <main>
            <footer className={styles.footer}>
                <div>
                            <h3>TRƯỜNG THPT LÝ THÁI TỔ - <span>HOTLINE: 0937.566.511(THẦY THANH) – 0903.081.569(THẦY SƠN)
            </span> </h3>
                            <h3>ĐỊA CHỈ: 640/2 NGUYỄN OANH, P. 6, Q. GÒ VẤP, TP. HỒ CHÍ MINH - ĐT: (08) 2218.5550
            </h3>
                    <h3>BẢN ĐỒ ĐƯỜNG ĐI TỚI TRƯỜNG THPT LÝ THÁI TỔ</h3>
                </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15673.981861160986!2d106.6797701!3d10.8498697!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa823d52cf43e579f!2zVHLGsOG7nW5nIFRydW5nIEjhu41jIFBo4buVIFRow7RuZyBMw70gVGjDoWkgVOG7lQ!5e0!3m2!1svi!2s!4v1526182620621" ></iframe>
                </footer>
        </main>
    
    )
}
export default FootLayout