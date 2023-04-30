import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-2xl mt-20">This Page Not Found</h1>
        <p className="">
          You just hit a route that doesn&#39;t exist... the sadness.
        </p>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
