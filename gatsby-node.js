const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const workResult = await graphql(`
    query {
      allMicrocmsWorksMain(sort: { order: DESC, fields: createdAt }) {
        edges {
          node {
            id
            works_slug
          }
        }
      }
    }
  `);

  console.log(workResult);

  if (workResult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`);
    return;
  }
  workResult.data.allMicrocmsWorksMain.edges.forEach(({ node }) => {
    createPage({
      path: `/work/post/${node.works_slug}`,
      component: path.resolve(`./src/templates/workpost-template.js`),
    });
  });
};
