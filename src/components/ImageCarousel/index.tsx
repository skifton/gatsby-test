import React from "react"
import clsx from "clsx"
import Img from "gatsby-image"
import { Tab } from "@headlessui/react"

interface IProps {
  images: string[]
  title: string
}

const ImageCarousel: React.FC<IProps> = ({ images, title }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map((image: string, index: number) => (
            <Tab
              key={image}
              as="div"
              className={clsx(
                "relative flex h-24 cursor-pointer items-center justify-center rounded-md text-sm font-medium uppercase",
                {
                  "bg-gray-50 text-gray-900": index === 0,
                  "bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4":
                    index !== 0,
                }
              )}
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{title}</span>
                  <span tabIndex={0} className="absolute inset-0 overflow-hidden rounded-md">
                    <Img
                      fluid={{
                        src: image,
                        aspectRatio: 0,
                        sizes:
                          "(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw",
                        srcSet: "",
                      }}
                      alt={`${title} image number${index + 1}`}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
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
        {images.map((image: string, index: number) => (
          <Tab.Panel key={image}>
            <img
              src={image}
              alt={`${title} image number${index + 1}`}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

export default ImageCarousel
