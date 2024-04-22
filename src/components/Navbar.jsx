import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { RiArticleFill } from "react-icons/ri";
import { MdFeaturedVideo } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";

export const Navbar = () => {
  {
    /* ESTILOS TAILWINDCSS */
  }

  const navItem = "flex items-center py-4 px-2 hover:bg-slate-700";
  const linkItem = "flex items-center";

  return (
    <nav className="flex flex-col bg-slate-900 text-white">
      {/* HEADER */}

      <header className="flex justify-between p-4 text-2xl font-semibold">
        <Link to="/">
          <h1>TERMUX DEV</h1>
        </Link>
        <div>
          <FaBars />
          <IoCloseSharp />
        </div>
      </header>

      <ul className="bg-slate-800">
        {/* HomePage */}

        <li className={navItem}>
          <Link to="/" className={linkItem}>
            <IoIosHome />
            <p>INICIO</p>
          </Link>
        </li>

        {/* Articles */}

        <li className={navItem}>
          <Link to="/articles" className={linkItem}>
            <RiArticleFill />
            <p>ARTÍCULOS</p>
          </Link>
        </li>

        {/* Courses */}

        <li className={navItem}>
          <Link to="/courses" className={linkItem}>
            <MdFeaturedVideo />
            <p>CURSOS</p>
          </Link>
        </li>

        {/* About */}

        <li className={navItem}>
          <Link to="/about" className={linkItem}>
            <IoMdInformationCircle />
            <p>SOBRE NOSOTROS</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
