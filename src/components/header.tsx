import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="flex align-center p-3 shadow-lg xl:p-5">
    <div className="w-full  max-w-[340px] mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl ">
      <Link className="text-xl no-underline text-black xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl" to="/">
        {siteTitle}
      </Link>
      </div>
  </header>
)

export default Header
