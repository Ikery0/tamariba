import { NextPage } from "next"
import SpMenu from "./SpMenu"
import MainLogo from "../atoms/MainLogo"
import ToggleThemeButton from "../atoms/ToggleThemeButton"
import HeaderNav from "../molecules/HeaderNav"
import Container from "../templates/Container"


const Header: NextPage = () => {

  return (
    <header className="py-2 fixed top-0 left-0 w-full z-20 lg:py-4">
      <Container size={1280}>
        <div className="flex justify-between relative items-center">
          <MainLogo />
          <HeaderNav />
          <SpMenu />
          <ToggleThemeButton />
        </div>
      </Container>
    </header>
  )
}

export default Header