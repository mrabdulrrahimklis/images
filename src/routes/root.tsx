import {createBrowserRouter} from "react-router-dom";
import {ROUTES} from "../core/const/routes.ts";
import {ErrorPage} from "../core/components/sharede/ErrorPage.tsx";
import {HomePage} from "../modules/home/page/HomePage.tsx";
import {SingleMediaView} from "../modules/mediaView/page/SingleMediaView.tsx";

export const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: ROUTES.SINGLE_IMAGE,
        element: <SingleMediaView />,
    }
])