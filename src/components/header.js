import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="flex align-center p-5 px-20 shadow-lg">
    <div className="max-w-7xl text-start">
      <Link className="text-5xl no-underline text-black" to="/">
        {siteTitle}
      </Link>
    </div>
  </header>
)

export default Header
