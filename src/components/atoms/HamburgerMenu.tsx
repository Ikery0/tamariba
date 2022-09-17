import { NextPage } from "next";
import { useState } from "react";

type Text = 'menu' | 'close'

const HamburgerMenu = () => {
  const [text, setText] = useState<Text>('menu')

  const toggleText = (): void => setText(text === 'menu' ? 'close' : 'menu')

  return (
    <>
      <button
        className="fixed grid place-items-center w-14 h-14 bottom-4 left-1/2 -translate-x-1/2 m-auto bg-gray-700 rounded-full lg:hidden"
        onClick={toggleText}
      >
        <span className="uppercase text-xs font-bold pl-px text-gray-50 text-opacity-90">{text}</span>
      </button>
    </>
  )
}

export default HamburgerMenu