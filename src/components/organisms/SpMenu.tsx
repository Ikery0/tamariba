import { NextPage } from "next";
import { useState } from "react";
import HamburgerButton from "../atoms/HamburgerBtn";
import SpNav from "./SpNav";

const SpMenu: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleHamburger = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <HamburgerButton 
      isOpen={isOpen}
      onClick={toggleHamburger}
      />
     <SpNav 
     isOpen={isOpen}
     />
    </>
  )
}

export default SpMenu