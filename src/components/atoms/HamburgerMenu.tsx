import { NextPage } from "next";
import { useEffect, useState } from "react";

type Obj = {
  text: 'menu' | 'close',
  ariaHidden: 'true' | 'false'
}

const closedObj: Obj = {
  text: 'menu',
  ariaHidden: 'true'
}

const openedObj: Obj = {
  text: 'close',
  ariaHidden: 'false'
}

const HamburgerMenu: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  let obj: Obj = closedObj

  const toggleHamburger = (): void => {
    setIsOpen(!isOpen)
    obj = isOpen ? openedObj : closedObj
  }

  return (
    <>
      <button
        className="fixed grid place-items-center w-14 h-14 bottom-4 left-1/2 -translate-x-1/2 m-auto bg-gray-700 rounded-full lg:hidden"
        onClick={toggleHamburger}
        aria-controls="spMenu"
        aria-expanded={isOpen}
      >
        <span className="uppercase text-xs font-bold pl-px text-gray-50 text-opacity-90">{obj.text}</span>
      </button>
      {
        isOpen ? (
          <div
            id="spMenu"
            className={`visible bg-gray-200 z-10 opacity-100 duration-300`}
            aria-hidden={obj.ariaHidden}
          >
            sp menu
          </div>
        ) : (
          <div
            id="spMenu"
            className={`invisible bg-gray-200 z-10 opacity-0 duration-300`}
            aria-hidden={obj.ariaHidden}
          >
            sp menu
          </div>
        )

      }
    </>
  )
}

export default HamburgerMenu