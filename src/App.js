import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
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
