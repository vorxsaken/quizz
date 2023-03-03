import '@/styles/globals.css'
import TransitionProvider from '@/context/TransitionContext'
import { Ubuntu } from "next/font/google"
import Background from '@/components/Background';
import TransitionLayout from '@/animation/TransitionLayout';
const ubuntu = Ubuntu({ subsets: ['latin'], weight: "500" });

export default function App({ Component, pageProps }) {
  return (
    <TransitionProvider>
      <TransitionLayout>
        <Background />
        <div className={ubuntu.className}>
          <Component {...pageProps} />
        </div>
      </TransitionLayout>
    </TransitionProvider>
  )
}
