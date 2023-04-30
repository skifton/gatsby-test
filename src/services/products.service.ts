import { graphql, useStaticQuery } from "gatsby"

export const getProductList = () => {
  const data = useStaticQuery(
    graphql`
      query MyQuery($perPage: Int, $page: Int, $query: String) {
        jsonserver {
          allProducts(perPage: $perPage, page: $page, filter: { q: $query }) {
            id
            title
            price
            brand
            images
          }
        }
      }
    `,
  );

  return data.jsonserver.allProducts
}
