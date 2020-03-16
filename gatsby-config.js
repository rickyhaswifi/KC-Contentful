require(`dotenv`).config({path: `.env`,})
  
module.exports = {
  siteMetadata: {
    name: `King Clave`,
    tagline: `"King Clave - Página Oficial"`,
    githubLink: `https://github.com/rickyhaswifi/KC-Contentful`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
  ],
}