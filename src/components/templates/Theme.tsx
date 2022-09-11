import { useEffect } from "react"
import { Theme, useSetTheme } from "../../libs/theme"

type Props = {
  children: JSX.Element
}

const ThemeProveder = ({ children }: Props): JSX.Element => {
  const setTheme = useSetTheme()

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.getAttribute('data-theme')
    setTheme(initialColorValue as Theme)
  }, [setTheme])

  return (
    <>
      <script 
        dangerouslySetInnerHTML={{
          __html: `(function () {
            const storageTheme = window.localStorage.getItem("theme")
            let theme = getTheme()
          
            function getTheme() {
              if (storageTheme !== null) {
                return storageTheme;
              }
              
              const mql = window.matchMedia("(prefers-color-scheme: dark)");
              return mql.matches ? "dark" : "light";
            }
          
            const root = document.documentElement;
            root.setAttribute("data-theme", theme);
          })();`
        }}
      />
      { children }
    </>
  )
}

export default ThemeProveder