import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'

function MyApp({ Component, pageProps }: AppProps) {
  return <div className="flex h-screen">
    <Sidebar />
    <Component {...pageProps} />
  </div>
}

export default MyApp
