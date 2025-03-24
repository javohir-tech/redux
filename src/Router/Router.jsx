import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";
import ProductInfo from "../Components/ProductInfo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/shopPage',
                element: <ShopPage />
            },{
                path:'/productInfo/:id',
                element:<ProductInfo/>
            }
        ]
    }
])

export default router