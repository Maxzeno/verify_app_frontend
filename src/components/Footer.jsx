import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-veryDarkBlue">
      <div className="flex justify-center px-6 py-5">
        {/* <div>
          <img src={companyLogoWhite} className="h-8" alt="" />
        </div> */}

        <div className="flex space-x-3 text-white">
          <Link to="#" className="hover:text-brightRed">
            Home
          </Link>
          <Link to="#" className="hover:text-brightRed">
            About
          </Link>
          <Link to="#" className="hover:text-brightRed">
            Services
          </Link>
        </div>
      </div>
      <div className="flex justify-center text-white pt-1 pb-2">
        Copyright © 2024, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
