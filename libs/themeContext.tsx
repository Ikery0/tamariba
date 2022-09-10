import React, { useContext, createContext } from "react";
type Theme = 'light' | 'dark';

export const ThemeContext = createContext('light');

export const ThemeProvider = (props) => {
 const { children } = props

 return (
   <ThemeContext.Provider value={'light'}>
     { children }
   </ThemeContext.Provider>
 )
}