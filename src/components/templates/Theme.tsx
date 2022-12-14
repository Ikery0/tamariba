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
              console.log(mql.matches)
              return mql.matches ? "dark" : "light";
            }
          
            const root = document.documentElement;
            root.setAttribute("data-theme", theme);

            theme === 'dark' ? 
            document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
          })();`
        }}
      />
      { children }
    </>
  )
}

export default ThemeProveder