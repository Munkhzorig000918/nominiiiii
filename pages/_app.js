import '../styles/globals.css'
import { Provider } from "react-redux"
import Layout from '../components/Layout'

import { reduxStore } from "../redux/store"

export default function App({ Component, pageProps }) {
  return (
    <Provider store={reduxStore}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
