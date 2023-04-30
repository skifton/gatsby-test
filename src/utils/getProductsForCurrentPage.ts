import { useMemo } from "react"
import { IProduct } from "../models/product.model"

export const getProductsForCurrentPage = (
  currentPage: number,
  filteredProducts: IProduct[]
) => {
  const productsForCurrentPage = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * 9
    const lastPageIndex = firstPageIndex + 9
    return filteredProducts.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, filteredProducts])

  return productsForCurrentPage
}
