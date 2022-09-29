import { RecoilRoot } from 'recoil'
import Theme from '../components/templates/Theme'
import ThemeProveder from '../components/templates/Theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProveder>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </ThemeProveder>
    </RecoilRoot>
  )
}

export default MyApp
