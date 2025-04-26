import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Cart from "../Pages/Cart/Cart";
import Favorites from "../Pages/Favorites/Favorites";
import ErrorPage from "../Pages/ErrorPage.Jsx";
import Navbar from "../Components/Navbar/navbar.jsx";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
       errorElement: <div>
        <Navbar></Navbar>
        <ErrorPage></ErrorPage>
        
       </div>,
        
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