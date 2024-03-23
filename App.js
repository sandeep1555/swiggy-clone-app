import { Suspense,lazy, useState } from "react"
import  ReactDOM  from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Shimmer from "./src/Components/Shimmer";
import UserContext from "./src/Utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/Utils/appStore";
import Cart from "./src/Components/Cart";


const Instamart= lazy(()=>import("./src/Components/Instamart"))


  const AppLayout = () => {


    const [newUsername,setnewUsername]=useState("");


    return (

        <div>
     <Provider store={appStore}>
     <Header/>
     <Outlet/> 
     </Provider>
     
     </div>
    );
  };

  const AppRouter=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
        {
          path:"/about",
          element:<About/>,
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>
        },
        {
          path:"/instamart",
          element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>,
        },
        {
          path:"/cart",
          element:<Cart/>,
        },
      ]
    }
  ])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>)