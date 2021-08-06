module.exports = {
  siteMetadata: {
    title: "Jotter",
  },
  proxy: [
    {
      prefix: "/",
      url: "https://jotter.site",
    },
  ],
  plugins: [
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    'react-hot-toast',
    "gatsby-plugin-sass",
    '@auth0/auth0-react',
    'draft-js',
    'react-autosize-textarea',
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
};
