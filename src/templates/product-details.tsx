import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { IProduct } from "../models/product.model"
import ImageCarousel from "../components/ImageCarousel"
import RatingStars from "../components/RatingStars"

interface IProps {
  pageContext: {
    product: IProduct
  }
}

const ProductDetails: React.FC<IProps> = ({ pageContext }) => {
  const { product } = pageContext
  const { title, brand, rating, price, description } = product

  return (
    <Layout>
      <div className="mx-auto text-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 sm:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ImageCarousel images={product.images} title={title} />

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div>
              <h1 tabIndex={0} className="text-3xl font-bold tracking-tight text-gray-900">
                {title}
              </h1>
              <p tabIndex={0} className="-mt-10 text-gray-500">{brand}</p>
            </div>

            <div tabIndex={0} className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${price}</p>
            </div>

            <RatingStars rating={rating || 0} />

            <div tabIndex={0} className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Product Details" />

export default ProductDetails
