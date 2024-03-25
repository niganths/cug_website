import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx"
// import Footer from "../components/footer/Footer.jsx";


function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer/> */}
     
    </>
  );
}
export default RootLayout;
