import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from '../mainlayout'
import "bootstrap/dist/css/bootstrap.css";
import * as style from '../../CSS/style-template.module.css'
import {renderRichText} from 'gatsby-source-contentful/rich-text'

export default function tintuctemplate({data}) {
    const html =data.contentfulNews.content.content;
    const {title,featuredImg} = data.contentfulNews;
    return (
        <Layout>
            <div className={style.content}>
                <h2>{title}</h2>
                <GatsbyImage image={getImage(featuredImg)}/>
                <div dangerouslySetInnerHTML={{__html:html}}></div>
            </div>
        </Layout>
    )
}
export const query=graphql`
query TinTucPages($slug: String) {
  contentfulNews(slug: {eq: $slug}) {
    content {
      content
    }
    title
    featuredImage {
      gatsbyImageData(formats: NO_CHANGE)
    }
  }
}
`
