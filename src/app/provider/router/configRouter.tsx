import type {RouteObject} from "react-router-dom";
import {PathObject, PathsName} from "@/shared/config";
import {HomePage} from "@/pages/Home";
import {LoginPage} from "@/pages/Login";

export const configRouter: RouteObject[] = [
    {
        element: <HomePage/>,
        path: PathObject[PathsName.HOME]
    },
    {
        element: <LoginPage/>,
        path: PathObject[PathsName.LOGIN]
    }
]