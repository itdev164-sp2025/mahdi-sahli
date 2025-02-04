/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path");
exports.createPages = async ({graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulBlogPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.allContentfulBlogPost.nodes.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}/`, // Generates pages like /blog/first-post
      component: path.resolve("./src/templates/blog-post.js"), // Uses blog-post.js template
      context: {
        id: post.id, // Passes the ID for GraphQL query in blog-post.js
      },
    });
  });
};
  

