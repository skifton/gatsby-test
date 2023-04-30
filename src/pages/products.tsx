import React, { useState } from "react"
import queryString from "query-string"
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
  const [filterValue, setFilterValue] = useState("")
  const queryParams = queryString.parse(location.search)
  const [currentPage, setCurrentPage] = useState<string | number>(
    Number(queryParams.page) || 1
  )
  const debouncedSearchValue = useDebounce(filterValue, 500)
  const productList = getProductList()

  const filteredProducts = getFilteredProductList(
    productList,
    debouncedSearchValue
  )

  const productsForCurrentPage = getProductsForCurrentPage(
    Number(currentPage),
    filteredProducts
  )
  
  const changeFilterValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  const pageChangeHandler = (page: string | number) => {
    setCurrentPage(page)
  }

  return (
    <Layout>
      <div className="flex justify-center mt-10 md:justify-end">
        <SearchInput
          wrapperClassName="w-full md:w-72"
          onChange={changeFilterValueHandler}
          value={filterValue}
          id="search-products"
        />
      </div>

      <ProductList products={productsForCurrentPage} />

      <Pagination
        currentPage={Number(currentPage)}
        totalCount={filteredProducts.length}
        pageSize={9}
        onPageChange={pageChangeHandler}
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Products" />

export default ProductsPage
