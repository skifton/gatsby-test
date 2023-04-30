/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")

exports.createPages = async ({ page ,graphql, actions }) => {
  const { createRedirect, createPage } = actions
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

  createPage({
    path: `/products`,
    component: path.resolve('src/pages/products.tsx'),
    context: {
      perPage: 9,
      page: 0,
      query: ""
    },
  })

  createRedirect({
    fromPath: `/`,
    isPermanent: false,
    redirectInBrowser: true,
    toPath: `/products`,
  })
}
