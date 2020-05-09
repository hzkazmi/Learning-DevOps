const dotenv = require ("dotenv");

//if(process.env.NODE_ENV !== 'production'){
  dotenv.config();
//}

module.exports = {
  pathPrefix: "/gatsby-material-ui-business-starter",
  siteMetadata: {
    title: "Gatsby Material UI Contentful Business Starter",
    contact: {
      phone: "503-555-1111",
      email: "hi@foxandgeese.com",
    },
    menuLinks: [
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Team",
        link: "/team",
      },
    ],
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-stylus",
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `6duslta3qeqo`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      },
    },
  ],
};
