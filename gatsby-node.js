/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productList = await graphql(`
    query {
      jsonserver {
        allProducts {
          id
          title
          description
          price
          discountPercentage
          rating
          stock
          brand
          category
          thumbnail
          images
        }
      }
    }
  `)

  const productTemplate = path.resolve(`src/templates/product-details.tsx`)

  productList.data.jsonserver.allProducts.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: productTemplate,
      context: {
        product: node,
      },
    })
  })
}
