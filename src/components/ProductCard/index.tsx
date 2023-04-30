import React, { memo } from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { IProduct } from "../../models/product.model"

interface IProps {
  product: IProduct
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      aria-label={`Product Card for ${product.title}`}
      tabIndex={0}
      className="group no-underline text-black"
    >
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
        <Img
          fluid={{
            src: product?.images[0],
            aspectRatio: 0,
            sizes: "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",
            srcSet: "",
          }}
          alt={`${product.title} Main image`}
          className="h-96 w-full object-none object-center group-hover:opacity-75"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex flex-col items-start justify-between">
        <h3 className="text-lg font-medium truncate">{product?.title}</h3>
        <p className="mt-1 text-sm italic text-gray-500">{product.brand}</p>
        <p className="font-bold">${product?.price}</p>
      </div>
    </Link>
  )
}

export default memo(ProductCard)
