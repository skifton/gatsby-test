import { useMemo } from "react"
import { IProduct } from "../models/product.model"
import { graphql, useStaticQuery } from "gatsby"

export const getFilteredProductList = (
  productList: IProduct[],
  debouncedSearchValue: string
) => {
  return productList.filter(product =>
    product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  )
}
