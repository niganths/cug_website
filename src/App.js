import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About";
import Events from "./pages/Events";
import RootLayout from "./pages/RootLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preloader from "./components/preloader/PreLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "events", element: <Events /> },
    ],
  },
]);
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5400);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>{loading ? <Preloader /> : <RouterProvider router={router} />}
   
    </div>
   
  );
}

export default App;
