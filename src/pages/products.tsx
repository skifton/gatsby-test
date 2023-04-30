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

const ProductsPage = ({ location }) => {
  const [query, setQuery] = useState("")
  const { search } = location
  const params = new URLSearchParams(search)
  const [currentPage, setCurrentPage] = useState<string | number>(
    Number(params.get("page")) || 1
  )
  const debouncedSearchValue = useDebounce(query, 500)
  const productList = getProductList()

  const filteredProducts = getFilteredProductList(
    productList,
    debouncedSearchValue
  )

  const productsForCurrentPage = getProductsForCurrentPage(
    Number(currentPage),
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
          id="search-products"
        />
      </div>
      <ProductList products={productsForCurrentPage} />
      <Pagination
        currentPage={Number(currentPage)}
        totalCount={filteredProducts.length}
        pageSize={9}
        onPageChange={(page: string | number) => setCurrentPage(page)}
        location={location}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Products" />

export default ProductsPage
