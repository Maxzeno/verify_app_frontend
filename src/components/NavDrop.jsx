import { useState } from "react";
import { Person, Power, Speedometer2 } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import personLogo from "../assets/avatar_2.jpeg";

function NavDrop({ name }) {
  const [show, setShow] = useState(false);

  const handleSelect = () => {
    setShow(!show);
  };

  const logoutFunc = () => {};

  return (
    <div className="relative z-20">
      <div
        className="px-2 flex justify-center items-center cursor-pointer"
        onClick={handleSelect}
      >
        <img
          height={35}
          width={35}
          alt="Profile"
          src={personLogo}
          className="rounded-full border-2 cursor-pointer mr-1"
        />
        {/* <CaretDownFill className="text-[1.2em] leading-[0] hidden sm:inline" /> */}
      </div>
      {show && (
        <div className="w-40 text-neutral-700 py-2 shadow-md rounded-md px-2 absolute top-10 right-0 bg-white">
          <Link href="/artist/select">
            <div
              className="hover:text-neutral-500 border-b px-2 py-2 truncate text-ellipsis"
              onClick={handleSelect}
            >
              <div>Hi {name}</div>
            </div>
          </Link>
          <Link href="/dashboard">
            <div
              className="hover:text-neutral-500 border-b px-2 py-2 flex"
              onClick={handleSelect}
            >
              <Speedometer2 className="text-[1.3em] leading-[0] mr-2" />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link href="/profile">
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
              onClick={logoutFunc}
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