import { useState } from "react";
import { Person, Power, Speedometer2 } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import personLogo from "../assets/profile.png";

function NavDrop() {
  const [show, setShow] = useState(false);

  const handleSelect = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  function userLogout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <div className="relative z-20">
      <div
        className="flex justify-center items-center cursor-pointer border-gray-700 border-2 rounded-full"
        onClick={handleSelect}
      >
        <img
          height={38}
          width={38}
          alt="Profile"
          src={personLogo}
          className="rounded-full border-2 cursor-pointer"
        />
      </div>
      {show && (
        <div className="w-40 text-neutral-700 py-2 shadow-md rounded-md px-2 absolute top-10 right-0 bg-white">
          <Link to="/dashboard">
            <div
              className="hover:text-neutral-500 border-b px-2 py-2 flex"
              onClick={handleSelect}
            >
              <Speedometer2 className="text-[1.3em] leading-[0] mr-2" />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to="/profile">
            <div
              className="hover:text-neutral-500 border-b px-2 py-2 flex"
              onClick={handleSelect}
            >
              <Person className="text-[1.3em] leading-[0] mr-2" />
              <div>Profile</div>
            </div>
          </Link>
          <div className="cursor-pointer">
            <div
              className="hover:text-neutral-500 px-2 py-2 flex"
              onClick={userLogout}
            >
              <Power className="text-[1.3em] leading-[0] mr-2" />
              <div>Logout</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavDrop;
