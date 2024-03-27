import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx"
import Navbar from "../components/navbar/Navbar.jsx"


function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>     
    </>
  );
}
export default RootLayout;
