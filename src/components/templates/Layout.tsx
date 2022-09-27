import { children } from "cheerio/lib/api/traversing";
import { NextPage } from "next";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

type Props = {
  children: React.ReactNode
}

const Layout: NextPage<Props> = ({children}) => {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout