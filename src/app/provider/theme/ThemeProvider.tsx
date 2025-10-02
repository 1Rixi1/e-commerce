import React, {useState} from 'react';
import {LOCALSTORAGE_NAME_THEME, ThemeContext, ThemeName, type ThemeNameType} from "@/shared/config";


const defaultTheme = (localStorage.getItem(LOCALSTORAGE_NAME_THEME) || ThemeName.PINK) as ThemeNameType

type Props = {
    children: React.ReactNode
}

export const ThemeProvider = ({children}: Props) => {

    const [theme, setTheme] = useState<ThemeNameType>(defaultTheme)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

