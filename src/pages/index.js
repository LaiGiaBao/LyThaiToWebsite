import * as React from "react";
import Layout from "./components/Layouts/mainlayout";
import "bootstrap/dist/css/bootstrap.css";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFolder, folder} from '@fortawesome/free-solid-svg-icons'

const IndexPage = ({ data }) => {
  const { categories } = data.categories.siteMetadata;
  const {tintuc} = data
  return (
    <Layout>
      {categories.map((category) => (
        <table class="table">
          <thead>
            <tr>
              <th><FontAwesomeIcon icon={faFolder}/> {category}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {tintuc.edges.filter(edge => (
                  edge.node.category === category
                )).map(edge =>(
                  <tr>
                    <td><Link to={edge.node.slug}
                    key={edge.node.id}
                    ><GatsbyImage image={getImage(edge.node.featuredImage)} alt="nothing"/></Link></td>
                    <td><Link to={edge.node.slug}>{edge.node.title}</Link><br/><p className="text-secondary fs-6">{edge.node.releaseDate}</p></td>
                  </tr>)
                )}
          </tbody>
        </table>
      ))}
    </Layout>
  );
};

export default IndexPage;
export const query = graphql`
  query AllCategories {
    categories: site {
      siteMetadata {
        categories
      }
    }
    tintuc: allContentfulNews {
      edges {
        node {
          slug
          id
          featuredImage {
            gatsbyImageData(formats: NO_CHANGE, height: 80, width: 125)
          }
          category
          content {
            content
          }
          releaseDate(formatString: "DD-MM-YYYY HH:MM")
          title
        }
      }
    }
  }
`;
