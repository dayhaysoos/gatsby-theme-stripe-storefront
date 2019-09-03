
require("dotenv").config()

module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-stripe',
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}