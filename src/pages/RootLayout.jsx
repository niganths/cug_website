import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


        <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        </>

    );
}
export default RootLayout;
