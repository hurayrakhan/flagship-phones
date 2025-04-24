import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";
import Favorites from "../Pages/Favorites/Favorites";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/phones.json'),
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/favorites',
                element: <Favorites></Favorites>
            },
            
            
        ]
    }
])


export default router;