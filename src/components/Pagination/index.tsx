import React, { memo } from "react"
import clsx from "clsx"
import { navigate } from "gatsby"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { usePagination, DOTS } from "../../hooks/usePagination"

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
    siblingCount = 1,
    currentPage,
    pageSize,
    location,
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
      const nextPage = currentPage + 1
      onPageChange(nextPage)
      navigate(`${location.pathname}?page=${nextPage}`, { replace: true })
    }

    const onPrevious = () => {
      const previousPage = currentPage - 1
      onPageChange(previousPage)
      navigate(`${location.pathname}?page=${previousPage}`, { replace: true })
    }

    const onClickPage = (page: string | number) => {
      onPageChange(page)
      navigate(`${location.pathname}?page=${page}`, { replace: true })
    }

    return (
      <nav
        className="flex w-full my-10 justify-between border-t border-gray-200 px-4 sm:px-0"
        aria-label="Pagination"
      >
        <div className="flex m-0 w-0 flex-1">
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentPage === 1}
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
                onClick={() => onClickPage(pageNumber)}
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
            onClick={onNext}
            disabled={
              currentPage ===
              (paginationRange && paginationRange[paginationRange?.length - 1])
            }
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
