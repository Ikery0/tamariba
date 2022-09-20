import { ReactElement } from "react"
import { SunLight, HalfMoon } from 'iconoir-react'
import { useRecoilState } from "recoil"
import { themeState } from "../../libs/theme"

type ThemeOptions = {
  color: string,
  bg: string,
  icon: ReactElement,
}

const lightObj: ThemeOptions = {
  color: 'text-gray-50',
  bg: 'bg-gray-700',
  icon: <SunLight />
}

const darkObj: ThemeOptions = {
  color: 'text-gray-700',
  bg: 'bg-gray-200',
  icon: <HalfMoon />,
}

const ToggleThemeButton = () => {
  const [theme, setTheme] = useRecoilState(themeState)

  let obj: ThemeOptions = theme === 'light' ? lightObj : darkObj

  const onClicktoggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    window.localStorage.setItem('theme', newTheme)
    const root = window.document.documentElement
    root.setAttribute('data-theme', newTheme)
    newTheme === 'dark' ?
      document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')

    obj = newTheme === 'light' ? lightObj : darkObj
  }


  return (
    <>
      <button
        aria-label="ダークモード切り替えボタン"
        type="button"
        onClick={onClicktoggleTheme}
        className={`${obj.color} ${obj.bg} fixed bottom-4 right-4 w-14 h-14 p-1  rounded-full shadow-md  hover:cursor-pointer z-20 lg:static`}
      >
        <span className="flex justify-center items-center">{obj.icon}</span>
      </button>
    </>
  )
}

export default ToggleThemeButton