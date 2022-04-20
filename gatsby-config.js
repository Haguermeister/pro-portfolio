module.exports = {
  siteMetadata: {
    title: 'Austin Hague - Portfolio',
    author: 'Austin Hague',
    description: 'A portfolio to display my web development work.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'austin-hague-portfolio',
        short_name: 'portfolio',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/code-solid.svg',
      },
    },
    'gatsby-plugin-sass',
  ],
}
