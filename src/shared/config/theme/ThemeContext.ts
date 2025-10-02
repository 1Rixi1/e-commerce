import {createContext} from "react";

export const ThemeName = {
    PINK: 'pink-theme',
    BLUE: 'blue-theme'
} as const


export type ThemeNameType = typeof ThemeName[keyof typeof ThemeName]


export const LOCALSTORAGE_NAME_THEME = ''

type ThemeContextProps = {
    theme?: ThemeNameType,
    setTheme?: (theme: ThemeNameType) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

