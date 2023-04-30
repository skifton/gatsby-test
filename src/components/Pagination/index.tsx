import React, { memo, useMemo } from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { usePagination } from "../../hooks/usePagination"
import { DOTS } from "../../constants/pagination"

interface IProps {
  onPageChange: (page: string | number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  location: Location
}

const Pagination: React.FC<IProps> = memo(
  ({
    onPageChange,
    totalCount,
    siblingCount,
    currentPage,
    pageSize,
    location,
  }) => {
    const paginationRange =
      usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
      }) || []

    const isFirstPage = useMemo(
      () => currentPage === paginationRange[0],
      [currentPage, paginationRange]
    )

    const isLastPage = useMemo(
      () => currentPage === paginationRange.at(-1),
      [currentPage, paginationRange]
    )

    const nextPageHandler = () => {
      const nextPage = currentPage + 1
      onPageChange(nextPage)
      navigate(`${location.pathname}?page=${nextPage}`, { replace: true })
    }

    const previousPageHandler = () => {
      const previousPage = currentPage - 1
      onPageChange(previousPage)
      navigate(`${location.pathname}?page=${previousPage}`, { replace: true })
    }

    const selectPage = (page: string | number) => {
      onPageChange(page)
      navigate(`${location.pathname}?page=${page}`, { replace: true })
    }

    if (
      currentPage === 0 ||
      paginationRange == null ||
      paginationRange.length < 2
    ) {
      return null
    }

    return (
      <nav
        className="flex w-full my-10 justify-between border-t border-gray-200 px-4 sm:px-0"
        aria-label="Pagination"
      >
        <div className="flex m-0 w-0 flex-1">
          <button
            type="button"
            onClick={previousPageHandler}
            disabled={isFirstPage}
            className="inline-flex border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            aria-label="Previous Page"
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </button>
        </div>

        <ul className="hidden m-0 md:-mt-px md:flex" role="list">
          {paginationRange?.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
              return (
                <li key={`dots${index}`}>
                  <span className="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500">
                    &#8230;
                  </span>
                </li>
              )
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
                onClick={() => selectPage(pageNumber)}
                role="listitem"
                aria-label={`Page ${pageNumber}`}
                tabIndex={0}
              >
                {pageNumber}
              </li>
            )
          })}
        </ul>

        <div className="flex w-0 flex-1 justify-end">
          <button
            type="button"
            onClick={nextPageHandler}
            disabled={isLastPage}
            className="inline-flex border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
            aria-label="Next page"
          >
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
              aria-label="Arrow pointing to the right"
            />
          </button>
        </div>
      </nav>
    )
  }
)

export default Pagination
