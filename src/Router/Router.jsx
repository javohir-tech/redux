import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Views/HomePage";
import ShopPage from "../Views/ShopPage";

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
            }
        ]
    }
])

export default router