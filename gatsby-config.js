module.exports = {
  siteMetadata: {
    title: "Ian Hundere",
    description: "ian hundere / lead devops engineer specializing in software supply-chain security / cloud infrastructure + devops",
    siteUrl: "https://ian.hunde.re"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ian hundere / portfolio',
        short_name: 'hunde.re',
        description: "ian hundere / lead devops engineer specializing in software supply-chain security / cloud infrastructure + devops",
        lang: 'en',
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
