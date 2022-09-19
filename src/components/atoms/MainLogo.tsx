import { NextPage } from "next"
import Link from "next/link"


const MainLogo: NextPage = () => {

  return (
    <h1 className="text-2xl font-bold text-opacity-90 english lg:text-3xl">
      <Link href="/">
        <a className="hover:opacity-100">HANGOUT</a>
      </Link>
    </h1>
  )
}

export default MainLogo