import React, { useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductList from "../components/ProductList"
import SearchInput from "../components/SearchInput"
import useDebounce from "../hooks/useDebounce"
import Pagination from "../components/Pagination"
import { getProductList } from "../services/products.service"
import { getProductsForCurrentPage } from "../utils/getProductsForCurrentPage"
import { getFilteredProductList } from "../utils/getFilteredProductList"

const ProductsPage = () => {
  const [query, setQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const debouncedSearchValue = useDebounce(query, 1000)
  const productList = getProductList()

  const filteredProducts = getFilteredProductList(
    productList,
    debouncedSearchValue
  )

  const productsForCurrentPage = getProductsForCurrentPage(
    currentPage,
    filteredProducts
  )

  const onChangeSearchInput = (event: any) => {
    setQuery(event.target.value)
  }

  return (
    <Layout>
      <div className="flex justify-center mt-10 md:justify-end">
        <SearchInput
          wrapperClassName="w-full md:w-72"
          onChange={onChangeSearchInput}
          value={query}
        />
      </div>
      <ProductList products={productsForCurrentPage} />
      <Pagination
        currentPage={currentPage}
        totalCount={filteredProducts.length}
        pageSize={9}
        onPageChange={page => setCurrentPage(page)}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Products" />

export default ProductsPage
