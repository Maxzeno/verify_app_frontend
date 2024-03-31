import { useState } from "react";
import { Link } from "react-router-dom";

import companyLogo from "../assets/images/logo-nobg.png";
import whatsappLogo from "../assets/whatsapp_icon.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="fixed bottom-14 right-5 lg:right-10 z-10">
        <Link
          to="https://chat.whatsapp.com/whatsappgroup"
          className="text-indigo-500 hover:text-[#ff6a6a]"
        >
          <img src={whatsappLogo} alt="Logo" width={50} height={50} />
        </Link>
      </div>
      {/* Flex Container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={companyLogo} alt="" width={200} />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/about" className="hover:text-darkGrayishBlue py-3 pt-2">
            About
          </Link>
          <Link to="/services" className="hover:text-darkGrayishBlue py-3 pt-2">
            Services
          </Link>
          <Link to="/login" className="hover:text-darkGrayishBlue py-3 pt-2">
            Signin
          </Link>

          {/* Button */}
          <Link
            to="/register"
            className="hidden p-3 px-6 pt-2 text-white bg-indigo-500 rounded-full baseline hover:bg-brightRedLight md:block"
          >
            Get Started
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div
          className={
            toggleMenu
              ? "absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
              : "absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          }
        >
          <Link to="#">About</Link>
          <Link to="#">Services</Link>
          <Link to="/login">Signin</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
