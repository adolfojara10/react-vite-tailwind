import { useRoutes, BrowserRouter } from "react-router-dom"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/my-order",
      element: <MyOrder />
    },
    {
      path: "/my-orders",
      element: <MyOrders />
    },
    {
      path: "/my-account",
      element: <MyAccount />
    },
    {
      path: "/sign-in",
      element: <SignIn />
    },
    {
      path: "/*",
      element: <NotFound />
    },
  ])

  return routes
}

const App = () => {

  return (

    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>



    // <div className='bg-red-100'>
    //   <p>Hola mundo</p>
    //   <Home />
    //   <MyAccount />
    //   <MyOrder />
    //   <MyOrders />
    //   <NotFound />
    //   <SignIn />
    // </div>

  )
}

export default App
