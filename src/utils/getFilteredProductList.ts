import { IProduct } from "../models/product.model"

export const getFilteredProductList = (
  productList: IProduct[],
  debouncedSearchValue: string
) => {
  return productList.filter(product =>
    product.title.toLowerCase().includes(debouncedSearchValue.toLowerCase())
  )
}
