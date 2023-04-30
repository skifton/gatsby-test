import { navigate } from "gatsby-link"
const isBrowser = typeof window !== "undefined"
const IndexPage = () => isBrowser ? navigate('/products') : null

export default IndexPage