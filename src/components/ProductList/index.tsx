import React from "react"
import { IProduct } from "../../models/product.model"
import ProductCard from "../ProductCard"

interface IProps {
  products: IProduct[]
}
const ProductList: React.FC<IProps> = ({ products }) => {
  return (
    <ul
      aria-label="List Of Products"
      className="grid grid-cols-1 ml-0 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12 mt-20"
    >
      {products.map(product => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
