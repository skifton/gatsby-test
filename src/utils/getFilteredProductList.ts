import { useMemo } from "react"
import { IProduct } from "../models/product.model"

export const getFilteredProductList = (
  productList: IProduct[],
  debouncedSearchValue: string
) => {
  const filteredProducts = useMemo(
    () =>
      productList.filter(product =>
        product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
      ),
    [productList, debouncedSearchValue]
  )

  return filteredProducts
}
