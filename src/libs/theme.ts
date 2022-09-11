import { atom, useSetRecoilState } from 'recoil'

export type Theme = 'light' | 'dark'

export const themeState = atom<Theme>({
  key: 'themeState',
  default: 'light'
})

export const useSetTheme = () => useSetRecoilState(themeState)

