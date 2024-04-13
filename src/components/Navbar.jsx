import { useState } from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import companyLogo from "../assets/images/logo-nobg.png";
import whatsappLogo from "../assets/whatsapp_icon.png";

const Navbar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(location.hash);
    console.log(location.hash);
    setTimeout(() => {
      setData(null);
    }, 1000); // Adjust the timeout to match your scroll duration
  }, []);

  const handleClick = (e) => {
    const parsedUrl = new URL(e.target.href);
    const hash = parsedUrl.hash;
    setData(hash);
    console.log(e.target.href, hash);
    setTimeout(() => {
      setData(null);
    }, 1000); // Adjust the timeout to match your scroll duration
  };

  const handleScroll = () => {
    if (data) {
      const targetElement = document.getElementById(data.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="relative container mx-auto p-6">
      {handleScroll()}
      <div className="fixed bottom-14 right-5 lg:right-10 z-10">
        <Link
          to="https://chat.whatsapp.com/EoRESLRZwnz4X0bixDSQuL"
          className="text-indigo-500 hover:text-[#ff6a6a]"
        >
          <img
            className="rounded-lg"
            src={whatsappLogo}
            alt="Logo"
            width={50}
            height={50}
          />
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
          <Link
            to="#about"
            onClick={handleClick}
            className="hover:text-darkGrayishBlue py-3 pt-2"
          >
            About
          </Link>
          <Link
            to="#testimonials"
            onClick={handleClick}
            className="hover:text-darkGrayishBlue py-3 pt-2"
          >
            Testimonials
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
          <Link onClick={handleClick} to="#about">
            About
          </Link>
          <Link onClick={handleClick} to="#testimonials">
            Testimonials
          </Link>
          <Link to="/login">Signin</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
