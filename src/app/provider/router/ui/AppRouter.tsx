import {Route, Routes} from "react-router-dom";
import {configRouter} from "@/app/provider/router/configRouter.tsx";
import {Suspense} from "react";

export const AppRouter = () => {
    return (
        <Routes>
            {configRouter.map(({element, path}) => {
                return <Route
                    key={path}
                    element={
                        <Suspense fallback={<>Loading ...</>}>
                            {element}
                        </Suspense>}
                    path={path}/>
            })}
        </Routes>
    );
};

