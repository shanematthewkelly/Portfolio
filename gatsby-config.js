module.exports = {
  siteMetadata: {
    title: `Shane Kelly - Portfolio`,
    description: `🧍 A portfolio website developed using Gatsby, Three.js, WebGL and Spline to create a static website with 3D rendered models.`,
    author: `@shanematthewkelly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `Shane Kelly - Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#191919`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/appicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
