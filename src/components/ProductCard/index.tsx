import React from "react"
import { IProduct } from "../../models/product.model"
import Img from "gatsby-image"
import { Link } from "gatsby"

interface IProps {
  product: IProduct
}
const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Link
      to={`${product.id}`}
      aria-label="Product Card"
      className="group no-underline"
      aria-orientation="vertical"
      tabIndex={0}
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
        <Img
          fluid={{
            src: product?.images[0],
            aspectRatio: 0,
            sizes: "",
            srcSet: "",
          }}
          alt={product?.title}
          aria-label={`${product.title}Main image`}
          className="h-96 w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3 className="text-lg font-medium truncate">{product?.title}</h3>

        <p className="font-bold">${product?.price}</p>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">{product.brand}</p>
    </Link>
  )
}

export default ProductCard
