import * as React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header siteTitle="Gatsby Test" />
      <main
        role="main"
        className="max-w-[340px] pb-20 mx-auto 2xl:max-w-7xl xl:max-w-5xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl"
      >
        {children}
      </main>
      <footer role="footer" className="absolute bottom-5 w-full text-center">Copyright ©2023 Anton Simanenkau</footer>
    </div>
  )
}

export default Layout
