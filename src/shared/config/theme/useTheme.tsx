import {useContext} from "react";

import {ThemeContext, ThemeName, type ThemeNameType} from "@/shared/config";


export const useTheme = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {

        const newTheme = theme === ThemeName.PINK ? ThemeName.BLUE : ThemeName.PINK

        setTheme?.(newTheme as ThemeNameType)

    }

    return {toggleTheme, theme}
}
