import React, { useContext, createContext } from "react";
import { Context } from "vm";


type Theme = 'light' | 'dark';
const theme: Theme = 'light' 

export const ThemeContext = React.createContext({});

export const ThemeProvider = (props) => {
 const { children } = props

 return (
   <ThemeContext.Provider value={theme}>
     { children }
   </ThemeContext.Provider>
 )
}