import '@/styles/globals.css'
import Provider from '@/context/Provider'
import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({subsets: ['latin'], weight: "500"});

export default function App({ Component, pageProps }) {
  return (
    <Provider>
      <div className={ubuntu.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}
