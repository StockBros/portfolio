module.exports = {
  siteMetadata: {
    title: "Spencer Stock Portfolio",
    author: "Spencer Stock",
    description: "Homepage and Portfolio of Spencer Stock"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'spencer-stock-homepage',
        short_name: 'spencer-stock',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/ic_icon5.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
