import { RecoilRoot } from 'recoil'
import ThemeProveder from '../components/templates/Theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProveder>
        <Component {...pageProps} />
      </ThemeProveder>
    </RecoilRoot>
  )
}

export default MyApp
