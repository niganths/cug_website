import Logo from "../../assets/gifs/cuglogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-zinc-900  w-full">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CUG</span>
          </a>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Designed by <a href="https://www.linkedin.com/in/niganth-s-57600722b/" className="hover:underline text-teal-600">Niganth SG</a> & <a href="https://www.linkedin.com/in/nithishpalanisamy/" className="hover:underline text-teal-600">Nithish P</a></span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">Home</Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline me-4 md:me-6">Events</Link>
            </li>
            <li>
              <Link to="/roadmap" className="hover:underline me-4 md:me-6">Roadmap</Link>
            </li>
            <li>
              <Link to="/news" className="hover:underline me-4 md:me-6">News</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
