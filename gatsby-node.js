const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage, deletePage } = actions;
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const pages = result.data.allMarkdownRemark.edges;
    pages.forEach((page, index) => {
      const previous =
        index === pages.length - 1 ? null : pages[index + 1].node;
      const next = index === 0 ? null : pages[index - 1].node;

      createPage({
        path: page.node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          next,
          previous,
          slug: page.node.fields.slug,
        },
      });
    });
  });
};
