import React from "react"
import clsx from "clsx"
import { Tab } from "@headlessui/react"
import { StarIcon } from "@heroicons/react/20/solid"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductDetail: React.FC<{ pageContext: any }> = ({ pageContext }) => {
  const { product } = pageContext

  return (
    <Layout>
      <div className="mx-auto text-center max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 sm:text-left">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map(image => (
                  <Tab
                    key={product.image}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{product.title}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image}
                            alt={image}
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={clsx(
                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2",
                            {
                              "ring-indigo-500": selected,
                              "ring-transparent": !selected,
                            }
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.images.map(image => (
                <Tab.Panel key={image}>
                  <img
                    src={image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product.title}
              </h1>
              <p className="-mt-10 text-gray-500">{product.brand}</p>
            </div>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                ${product.price}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3">
              <h3 className="sr-only">Rating</h3>
              <div className="flex items-center justify-center sm:justify-start">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map(rating => (
                    <StarIcon
                      key={rating}
                      className={clsx("h-5 w-5 flex-shrink-0", {
                        "text-indigo-500": product.rating > rating,
                        "text-gray-300": product.rating < rating,
                      })}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo title="Product Detail" description={undefined} children={undefined} />
)

export default ProductDetail
