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