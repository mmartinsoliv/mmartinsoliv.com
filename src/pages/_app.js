import { DefaultSeo } from 'next-seo'
import '../../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'

import SEO from '../../next-seo.config'

import CommandBar from '../components/CommandBar'

const Noop = ({ children }) => children

function App({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  return (
   <>
    <DefaultSeo {...SEO} />
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
   </>
  )
}

export default App
