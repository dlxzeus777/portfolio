import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(null)

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(false)

    const modes = () =>
    {
        setTheme(prevTheme => !prevTheme)
        console.log(theme)
    }

    useEffect(() =>
    {
        if(!theme)
        {
            document.body.style.background = '#23232e'
            document.body.style.color = 'white'
        }
        else
        {
            document.body.style.background = 'white'
            document.body.style.color = 'black'
        }
    }, [theme])

    return (
      <ThemeContext.Provider value={{ theme, modes }}>
        {children}
      </ThemeContext.Provider>
    );
  };