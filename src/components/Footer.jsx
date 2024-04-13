import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const location = useLocation();

  const [data, setData] = useState(null);

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
    <div className="bg-veryDarkBlue">
      {handleScroll()}

      <div className="flex justify-between px-6 py-5">
        {/* <div>
          <img src={companyLogoWhite} className="h-8" alt="" />
        </div> */}

        <div className="flex space-x-3 text-white">
          <Link to="/" className="hover:text-brightRed">
            Home
          </Link>
          <Link
            to="#about"
            onClick={handleClick}
            className="hover:text-brightRed"
          >
            About
          </Link>
          <Link
            to="#testimonials"
            onClick={handleClick}
            className="hover:text-brightRed"
          >
            Testimonials
          </Link>
        </div>
        <div className="flex justify-center text-white pt-1 pb-1">
          Copyright © {currentYear} BetaVerify
        </div>
      </div>
    </div>
  );
};

export default Footer;
