const path =require(`path`)
exports.createPages = async({graphql, actions})=>{
    const {data} = await graphql(`
    query TinTuc {
      allContentfulNews {
        edges {
          node {
            slug
          }
        }
      }
    }
    `)
    data.allContentfulNews.edges.forEach(edge =>{
        actions.createPage({
            path: edge.node.slug,
            component: path.resolve('./src/pages/components/Layouts/templates/tintuctemplate.js'),
            context: {slug: edge.node.slug}
        })
    })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}