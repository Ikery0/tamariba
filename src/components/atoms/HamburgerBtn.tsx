import { MouseEventHandler } from "react"
import { NextPage } from "next";

type Props = {
  isOpen: boolean,
  onClick: MouseEventHandler
}

type Obj = {
  text: 'menu' | 'close',
  label: 'メニューを閉じる' | 'メニューを開く'
}

const openObj: Obj = {
  text: 'close',
  label: 'メニューを閉じる'
}

const closeObj: Obj = {
  text: 'menu',
  label:'メニューを開く'
}

const HamburgerButton: NextPage<Props> = ({ isOpen, onClick }) => {
  const obj = isOpen ? openObj : closeObj
  const {text, label} = obj

  return (
    <button
      type="button"
      className="fixed grid place-items-center w-14 h-14 bottom-4 left-1/2 -translate-x-1/2 m-auto bg-gray-700 shadow-md rounded-full z-20 lg:hidden dark:bg-gray-200 hover:opacity-70"
      aria-controls="spNav"
      aria-label={label}
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <span className="uppercase text-xs font-bold pl-px text-gray-50 text-opacity-90 dark:text-gray-700 dark:text-opacity-100">{text}</span>
    </button>
  )
}

export default HamburgerButton