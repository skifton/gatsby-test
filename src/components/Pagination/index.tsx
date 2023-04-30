import React from "react"
import clsx from "clsx"
import { usePagination, DOTS } from "../../hooks/usePagination"
import { Link } from "gatsby"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || (paginationRange?.length || 0) < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  //let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <nav className="flex w-full my-10 justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="flex m-0 w-0 flex-1">
        <button
          type="button"
          onClick={onPrevious}
          //   disabled={currentPage === 1}
          className="inline-flex border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>

      <ul className="hidden m-0 md:-mt-px md:flex">
        {paginationRange?.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <li>&#8230;</li>
          }

          return (
            <li
              key={pageNumber}
              className={clsx(
                "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 hover:cursor-pointer",
                {
                  "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600":
                    pageNumber === currentPage,
                }
              )}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        })}
      </ul>

      <div className="flex w-0 flex-1 justify-end">
        <button
          type="button"
          onClick={onNext}
          //disabled={currentPage === lastPage}
          className="inline-flex border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  )
}

export default Pagination
