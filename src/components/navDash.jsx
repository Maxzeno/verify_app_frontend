import { useState } from "react";
import {
  BarChartLine,
  CurrencyDollar,
  Cursor,
  Diagram2,
  Envelope,
  GraphUp,
  Image,
  Link45deg,
  People,
  PinMap,
  Speedometer2,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import companyLogo from "../assets/images/logo-nobg.png";
import NavDrop from "./NavDrop";

export default function NavbarCore({ children, headerName = "Dashboard" }) {
  const [menuOpen, setMenu] = useState(null);

  const menuFunc = (e) => {
    if (menuOpen == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="z-10 md:overflow-auto md:grid md:grid-cols-6 lg:grid-cols-5 md:h-screen">
          <div
            className={`overflow-auto transition-left duration-300 ease-in-out transform bg-white border-r md:col-span-2 lg:col-span-1 z-10 w-[300px] ${
              menuOpen != true && "left-[-300px]"
            } md:left-0 h-[calc(100vh)] md:relative md:w-auto md:min-w-[auto] fixed`}
          >
            <div>
              <div className="px-3 md:px-4 pt-4">
                <div className="mb-4">
                  <Link to="/dashboard">
                    <img src={companyLogo} alt="Logo" width={150} height={37} />
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/dashboard"
                    className={`my-nav-link-light flex ${
                      true && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Speedometer2 className="text-[1.3em] leading-[0] mr-3" />
                    Dashboard
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/link"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Link45deg className="text-[1.3em] leading-[0] mr-3" />
                    Create Link
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/supporters"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <People className="text-[1.3em] leading-[0] mr-3" />
                    Supporters
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/email"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Envelope className="text-[1.3em] leading-[0] mr-3" />
                    Email
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/statistics"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <GraphUp className="text-[1.3em] leading-[0] mr-3" />
                    Statistics
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/withdraw"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <CurrencyDollar className="text-[1.3em] leading-[0] mr-3" />
                    Withdraw
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/referrals"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <People className="text-[1.3em] leading-[0] mr-3" />
                    Referrals
                  </Link>
                </div>
                <div className="my-4">OTHERS</div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/affiliate"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Diagram2 className="text-[1.3em] leading-[0] mr-3" />
                    Affiliate
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/socials"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Cursor className="text-[1.3em] leading-[0] mr-3" />
                    Social media
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/pixel"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <PinMap className="text-[1.3em] leading-[0] mr-3" />
                    Pixel
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="/analytics"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <BarChartLine className="text-[1.3em] leading-[0] mr-3" />
                    Analytics
                  </Link>
                </div>
                <div className="my-4">
                  <Link
                    onClick={menuFunc}
                    to="#"
                    className={`my-nav-link-light flex  ${
                      false && "text-blue-500 hover:text-blue-400"
                    }`}
                  >
                    <Image className="text-[1.3em] leading-[0] mr-3" />
                    NFT
                    <span className="bg-blue-500 text-white rounded-lg text-xs ml-2 p-1 leading-none">
                      soon
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-auto md:col-span-4 relative w-auto">
            <nav className="py-3">
              <div className="flex justify-between px-3 md:px-6">
                <div className="font-extrabold text-3xl">{headerName}</div>
                <div className="flex">
                  <div className="mr-5">
                    <NavDrop name={"Emma"} />
                  </div>
                  <button
                    className="md:hidden rounded border border-zinc-600 hover:border-white"
                    onClick={menuFunc}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </nav>
            <div className="px-5 py-5">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
