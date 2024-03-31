import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-veryDarkBlue">
      <div className="flex justify-between px-6 py-5">
        {/* <div>
          <img src={companyLogoWhite} className="h-8" alt="" />
        </div> */}

        <div className="flex space-x-3 text-white">
          <Link to="/" className="hover:text-brightRed">
            Home
          </Link>
          <Link to="/about" className="hover:text-brightRed">
            About
          </Link>
          <Link to="/services" className="hover:text-brightRed">
            Services
          </Link>
        </div>
        <div className="flex justify-center text-white pt-1 pb-1">
          Copyright © {currentYear} verifier
        </div>
      </div>
    </div>
  );
};

export default Footer;
