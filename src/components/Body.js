import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch, useSelector } from "react-redux";
import { addOnlineStatus } from "../utils/configSlice";
import MovieDetailsCard from "./MovieDetailsCard";


const Body = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    window.addEventListener("online",()=>{
      dispatch(addOnlineStatus(true));
    })
    window.addEventListener("offline",()=>{
      dispatch(addOnlineStatus(false));
    })
  },[]);
  const onlineStatus=useSelector((store)=>store.config.onlineStatus);
  if (!onlineStatus) {
    return (
      <h1 className="bg-black text-white w-screen h-screen p-24 text-center">
        Offline.  Try to connect to Internet.
      </h1>
    );
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <h1>404 Not Found</h1>,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/movie/:id",
      element:<MovieDetailsCard/>
    }
  ]);

  
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
