import { NextPage } from "next"
import Link from "next/link"


const MainLogo: NextPage = () => {

  return (
    <h1 className="text-2xl z-20 english lg:text-3xl">
      <Link href="/">
        <a className="hover:opacity-100 uppercase dark:text-gray-50">tamariba</a>
      </Link>
    </h1>
  )
}

export default MainLogo