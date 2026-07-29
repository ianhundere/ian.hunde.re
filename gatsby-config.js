module.exports = {
  siteMetadata: {
    title: "Ian Hundere",
    description: "Ian Hundere's Portfolio"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Ian Hundere — Portfolio',
        short_name: 'hunde.re',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#1b1f22',
        display: 'minimal-ui',
        icon: 'src/images/ianhundere.jpg',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ]
}
