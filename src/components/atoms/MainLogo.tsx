import { NextPage } from "next"
import Link from "next/link"
import Container from "../templates/Container"


const MainLogo: NextPage = () => {

  return (
    <Container size={1280}>
      <h1 className="text-6xl font-bold text-opacity-90 english lg:text-3xl">
        <Link href="/">
          <a>HANGOUT</a>
        </Link>
      </h1>
    </Container>
  )
}

export default MainLogo