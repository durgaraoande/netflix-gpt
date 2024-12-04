import React, { useEffect } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom"; // Use createHashRouter
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch, useSelector } from "react-redux";
import { addOnlineStatus } from "../utils/configSlice";
import MovieDetailsCard from "./MovieDetailsCard";
import { useRouteError } from "react-router-dom"; // For error handling

// Error component to display detailed error message
const Error = () => {
  const error = useRouteError();
  
  return (
    <div className="bg-red-500 text-white p-4">
      <h1 className="text-2xl font-bold">Something went wrong!</h1>
      <p className="text-lg">Error: {error?.message || "An unknown error occurred"}</p>
      <p className="text-sm">Status: {error?.status || "N/A"}</p>
    </div>
  );
};

const Body = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.addEventListener("online", () => {
      dispatch(addOnlineStatus(true));
    });
    window.addEventListener("offline", () => {
      dispatch(addOnlineStatus(false));
    });
  }, [dispatch]);

  const onlineStatus = useSelector((store) => store.config.onlineStatus);

  if (!onlineStatus) {
    return (
      <h1 className="bg-black text-white w-screen h-screen p-24 text-center">
        Offline. Try to connect to Internet.
      </h1>
    );
  }

  // Define the hash-based router
  const appRouter = createHashRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />, // Improved errorElement
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/movie/:id",
      element: <MovieDetailsCard />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
