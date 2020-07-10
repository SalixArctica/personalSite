module.exports = {
  siteMetadata: {
    title: `tankcaster.dev`,
    description: `Freelance web developer`,
    author: `tankcaster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tankcaster Development`,
        short_name: `tankcaster`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `teal`,
        display: `minimal-ui`,
        icon: `src/images/tankcaster-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Roboto"],
        },
      },
    },
  ],
}
