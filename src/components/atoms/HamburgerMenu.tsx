import { NextPage } from "next";
import { useState } from "react";

type Text = 'menu' | 'close'

const HamburgerMenu: NextPage = () => {
  const [text, setText] = useState<Text>('menu')
  const [expanded, setExpanded] = useState<boolean>(false)

  const toggleMenu = (): void =>  {
    setText(text === 'menu' ? 'close' : 'menu')
    setExpanded(!expanded)
    
  }

  return (
    <>
      <button
        className="fixed grid place-items-center w-14 h-14 bottom-4 left-1/2 -translate-x-1/2 m-auto bg-gray-700 rounded-full z-20 lg:hidden"
        onClick={toggleMenu}
        aria-expanded={expanded}
      >
        <span className="uppercase text-xs font-bold pl-px text-gray-50 text-opacity-90">{text}</span>
      </button>
      <div className={`bg-gray-700 z-10`}>
        sp menu
      </div>
    </>
  )
}

export default HamburgerMenu