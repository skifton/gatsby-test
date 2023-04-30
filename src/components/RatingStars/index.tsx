import { StarIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import React from "react"

interface IProps {
  rating: number
}

const RatingStars: React.FC<IProps> = ({ rating }) => {
  const arrayOfPossibleRatings = [0, 1, 2, 3, 4]

  return (
    <div tabIndex={0} className="mt-3">
      <h3 className="sr-only">Rating</h3>
      <div className="flex items-center justify-center sm:justify-start">
        <div className="flex items-center">
          {arrayOfPossibleRatings.map(rate => (
            <StarIcon
              key={rating}
              className={clsx("h-5 w-5 flex-shrink-0", {
                "text-indigo-500": rating > rate,
                "text-gray-300": rating < rate,
              })}
            />
          ))}
        </div>
        <p className="sr-only">{rating} out of 5 stars</p>
      </div>
    </div>
  )
}

export default RatingStars
