import { NextPage } from "next"
import HamburgerMenu from "../atoms/HamburgerMenu"
import MainLogo from "../atoms/MainLogo"
import ToggleThemeButton from "../atoms/ToggleThemeButton"
import HeaderNav from "../molecules/HeaderNav"
import Container from "../templates/Container"


const Header: NextPage = () => {

  return (
    <header className="py-4 lg:fixed w-full z-20">
      <Container size={1280}>
        <div className="flex justify-between relative items-center">
          <MainLogo />
          <HeaderNav />
          <HamburgerMenu />
          <ToggleThemeButton />
        </div>
      </Container>
    </header>
  )
}

export default Header