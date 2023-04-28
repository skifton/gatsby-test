import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Gatsby Test" />
      <main className="max-w-7xl mx-auto">{children}</main>
    </>
  )
}

export default Layout
