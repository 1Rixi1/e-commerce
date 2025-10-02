import {lazy} from "react";


export const HomePageAsync = lazy(() => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve(import('./HomePage.tsx'))
        }, 1500)

    })

})