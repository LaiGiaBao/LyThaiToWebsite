const dotenv = require('dotenv')
if(process.env.NODE_ENV !=='production'){
  dotenv.config()
}
module.exports = {
  siteMetadata: {
    title: "Ly Thai To Highschool",
    categories: ["Tuyển sinh","Hoạt động ngoại khoá","Bản tin trường","Thông báo","Tin tức SGD & ĐT","Ngoại ngữ","Kỹ năng mềm","Tin báo chí"]
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    'gatsby-transformer-remark',
    "@contentful/gatsby-transformer-contentful-richtext",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "tintuc",
        path: `${__dirname}/src/tintuc/`,
      },
      __key: "tintuc",
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images-v2 must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images-v2`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0x2drm3g9wja`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
