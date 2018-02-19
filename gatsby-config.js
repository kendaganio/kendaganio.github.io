module.exports = {
  siteMetadata: {
    title: 'Ken-Lauren Daganio'
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: 'language-'
          }
        }]
      }
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "UA-114305079-1",
        includeInDevelopment: false,
      }
    },
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
