export const PathsName = {
    HOME: 'home',
    LOGIN: 'login'
} as const

export type PathsNameType = typeof PathsName[keyof typeof PathsName]


export const PathObject = {
    [PathsName.HOME]: '/',
    [PathsName.LOGIN]: '/login'
}





