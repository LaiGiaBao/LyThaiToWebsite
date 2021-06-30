import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import HeadLayout from './headlayout'
import Layout2 from "./secondheadlayout"
import FootLayout from './footlayout'

const Layout=() =>{
    return (
        <main>
            <Layout2></Layout2>
            <HeadLayout></HeadLayout>
        </main>
    )
}
export default Layout