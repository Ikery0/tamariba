import { NextPage } from "next";
import { useEffect, useState } from "react";

type Text = 'menu' | 'close'
type SpMenuClass = string[]

const openClasses: SpMenuClass = ['opacity-100', 'visible']
const closeClasses: SpMenuClass = ['opacity-0', 'invisible']

const HamburgerMenu: NextPage = () => {
  const [text, setText] = useState<Text>('menu')
  const [expanded, setExpanded] = useState<boolean>(false)
  const [hidden, setHidden] = useState<boolean>(true)

  let spMenuClasses = closeClasses

  const toggleHamburger = (): void =>  {
    setText(text === 'menu' ? 'close' : 'menu')
    setExpanded(!expanded)
    setHidden(!hidden)

    spMenuClasses = closeClasses ? closeClasses : openClasses
  }
  



  return (
    <>
      <button
        className="fixed grid place-items-center w-14 h-14 bottom-4 left-1/2 -translate-x-1/2 m-auto bg-gray-700 rounded-full lg:hidden"
        onClick={toggleHamburger}
        aria-controls="spMenu"
        aria-expanded={expanded}
      >
        <span className="uppercase text-xs font-bold pl-px text-gray-50 text-opacity-90">{text}</span>
      </button>
      <div
        id="spMenu"
        className={`bg-gray-700 z-10`}
        aria-hidden={hidden}
      >
        sp menu
      </div>
    </>
  )
}

export default HamburgerMenu