import {lazy} from "react";


export const LoginPageAsync = lazy(() => {

    return new Promise(resolve => {

        setTimeout(() => {
            resolve(import('./LoginPage.tsx'))
        }, 1500)

    })

})