import { NextPage } from "next"
import Link from "next/link"


const MainLogo: NextPage = () => {

  return (
    <h1 className="text-6xl font-bold text-opacity-90 english lg:text-3xl">
      <Link href="/">
        <a>HANGOUT</a>
      </Link>
    </h1>
  )
}

export default MainLogo