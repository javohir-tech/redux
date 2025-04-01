import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import MainLayout from './Layout/MainLayout'

//bootstrap Css
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Views/HomePage';
import ShopPage from './Views/ShopPage';
import ProductInfo from './Components/ProductInfo';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/shopPage',
          element: <ShopPage />
        },
        {
          path: '/productInfo/:id',
          element: <ProductInfo />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
