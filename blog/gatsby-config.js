/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    description: ``,
    author: `Mahdi Sahli`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact:{
      name:'Mahdi Sahli',
      company:'Blog Inc.',
      address:'PO box 1234'
    }
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "cyj6h0jynwg4",
        accessToken: "5b09CgPswxWPVwCVjwCU3EsElC2uox7h9DJn_JA4kXU",
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
