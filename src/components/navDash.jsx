import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import companyLogo from "../assets/images/logo-nobg.png";
import whatsappLogo from "../assets/whatsapp_icon.png";
import NavDrop from "./NavDrop";

export default function NavbarCore({ children, headerName = "Dashboard" }) {
  const location = useLocation();
  const currentUrl = location.pathname;

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
        <div className="fixed bottom-5 right-5 lg:right-10 z-10">
          <Link
            to="https://chat.whatsapp.com/whatsappgroup"
            className="text-indigo-500 hover:text-[#ff6a6a]"
          >
            <img src={whatsappLogo} alt="Logo" width={50} height={50} />
          </Link>
        </div>
        <div className="z-10 md:overflow-auto md:grid md:grid-cols-6 lg:grid-cols-5 md:h-screen">
          <div
            className={`overflow-auto transition-left duration-300 ease-in-out transform bg-white border-r md:col-span-2 lg:col-span-1 z-10 w-[300px] ${
              menuOpen != true && "left-[-300px]"
            } md:left-0 h-[calc(100vh)] md:relative md:w-auto md:min-w-[auto] fixed text-gray-600 text-base border-r-1 border-gray-300`}
          >
            <div>
              <div className="px-3 md:px-4 pt-4">
                <div className="mb-7">
                  <Link to="/dashboard">
                    <img src={companyLogo} alt="Logo" width={150} height={37} />
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="/dashboard"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex ${
                      currentUrl.includes("/dashboard")
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    Dashboard
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="/fund-wallet"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      currentUrl.includes("/fund-wallet")
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    Fund Wallet
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="/verification-history"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      currentUrl.includes("/verification-history") ||
                      currentUrl.includes("/detail")
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    Verification History
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="/payment-history"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      currentUrl.includes("/payment-history")
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    Payment History
                  </Link>
                </div>

                <div className="my-5 text-black">ID Services</div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="/nin-service"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      currentUrl.includes("/nin-service")
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    NIN Services
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="#"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      false
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between flex-1">
                      <span>BVN Services</span>

                      <span className="mr-2 bg-blue-500 text-white p-1 rounded-full text-xs">
                        soon
                      </span>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    onClick={menuFunc}
                    to="#"
                    className={`py-3 pl-2 rounded-e-lg my-nav-link-light flex  ${
                      false
                        ? "bg-blue-500 hover:bg-blue-400 text-white"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between flex-1">
                      <span>Other Services</span>

                      <span className="mr-2 bg-blue-500 text-white p-1 rounded-full text-xs">
                        soon
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-auto md:col-span-4 relative w-auto bg-gray-200">
            <nav className="py-3">
              <div className="flex justify-between px-5">
                <div className="font-extrabold text-3xl">{headerName}</div>
                <div className="flex">
                  <div>
                    <NavDrop />
                  </div>
                  <button
                    className="md:hidden rounded border-2 border-zinc-600 hover:border-zinc-500 ml-3"
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
            <div className="px-5s py-5s">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
