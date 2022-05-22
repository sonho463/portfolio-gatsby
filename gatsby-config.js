require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `そんほんすポートフォリオ`,
    siteUrl: `https://www.portfolio-gatsby-2022.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "WEBSONそんほんすポートフォリオ",
        short_name: "WEBSONそんほんす",
        start_url: "/",
        // background_color: "#ffea18",
        // theme_color: "#5155c0",
        display: "standalone",
        icon: "favicon.png",
      },
    },
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "src/utils/typography",
			},
		},
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: 'works-main',
          },
          {
            endpoint: 'works-tag',
          },
        ],
      },
		},
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				url: 'https://horumont.info/graphql',
			}
		},
  ],
};
