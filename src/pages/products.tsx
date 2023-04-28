import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/ProductList"

const ProductsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      jsonserver {
        allProducts {
          id
          title
          price
          brand
          images
        }
      }
    }
  `)

  return (
    <Layout>
      <ProductList products={data.jsonserver.allProducts} />
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Products" description={undefined} children={undefined} />
)

export default ProductsPage
