import { graphql, useStaticQuery } from "gatsby"

export const getProductList = () => {
  const data = useStaticQuery(
    graphql`
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
    `,
  );

  return data.jsonserver.allProducts
}
