import React, { Suspense, lazy } from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Shimmer from "./src/Components/Shimmer";


const Instamart= lazy(()=>import("./src/Components/Instamart"))

  const AppLayout = () => {
    return (
        <div>
     <Header/>
     <Outlet/>
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
      ]
    }
  ])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter}/>)