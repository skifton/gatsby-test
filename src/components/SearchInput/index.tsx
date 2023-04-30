import React, { memo } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string
  className?: string
}

const SearchInput: React.FC<IProps> = memo(
  ({ wrapperClassName, className, ...props }) => {
    return (
      <div className={wrapperClassName}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search Products
        </label>
        <div className="relative">
          <div
            className={clsx(
              "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
              {
                hidden: props.value,
              }
            )}
          >
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className={clsx(
              "block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              className
            )}
            placeholder="Search Products..."
            aria-label="Search Products"
            {...props}
          />
        </div>
      </div>
    )
  }
)

export default SearchInput
