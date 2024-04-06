import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import('./components/About'));

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path : '/about',
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurants/:resId',
                element: <Restaurant />
            }
        ],
        errorElement: <Error />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>); 