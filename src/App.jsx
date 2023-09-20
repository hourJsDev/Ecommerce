import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import {Layout,Home,About,Services,Product} from './Pages'
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "product",
          element: <Product/>
        },
        {
          path: "services",
          element: <Services/>
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
