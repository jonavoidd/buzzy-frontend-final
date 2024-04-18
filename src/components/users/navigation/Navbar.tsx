import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { menu, close } from "ionicons/icons";
import UseCodeButton from "../code_input/UseCodeButton";
import CustomerUsage from "../code_input/CutomerUsage";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <nav className="navbar w-full flex flex-col justify-around items-center p-4 text-black text-lg font-semibold bg-[#F6EBDA] lg:w-auto lg:flex-row">
      <div className="w-auto flex justify-between space-x-24 items-center px-8 lg:space-x-0">
        <NavLink to={"/"}>
          <img src="/assets/logos/3.png" alt="logo" className="w-42 h-16" />
        </NavLink>
        <div
          className="text-4xl lg:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <IonIcon icon={open ? close : menu} className="text-[#F05347]" />
        </div>
      </div>
      <ul
        className={`${
          open
            ? "flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0"
            : "hidden lg:w-1/4 lg:flex lg:justify-around"
        }`}
      >
        <li className="mr-4 lg:mr-12 mb-4 lg:mb-0">
          <NavLink
            to={"/menu"}
            className={({ isActive }) =>
              isActive
                ? "text-[#F05347]"
                : "hover:text-orange-400 relative group"
            }
          >
            Menu
            <div className="absolute w-full h-0.5 bg-[#F05347] bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
          </NavLink>
        </li>
        <li className="mr-4 lg:mr-12 mb-4 lg:mb-0">
          <NavLink
            to={"/location"}
            className={({ isActive }) =>
              isActive
                ? "text-[#F05347]"
                : "hover:text-orange-400 relative group"
            }
          >
            Location
            <div className="absolute w-full h-0.5 bg-[#F05347] bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
          </NavLink>
        </li>
        <li className="mr-4 lg:mr-12 mb-4 lg:mb-0">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "text-[#F05347]"
                : "hover:text-orange-400 relative group"
            }
          >
            About Us
            <div className="absolute w-full h-0.5 bg-[#F05347] bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
          </NavLink>
        </li>
      </ul>
      <div className="hidden w-1/5 h-10 lg:flex">
        <UseCodeButton
          formClassName="w-full h-full -p-10"
          divClassName="w-full h-full"
          onClick={handleModalOpen}
        />
      </div>

      {showModal && <CustomerUsage onClose={() => setShowModal(false)} />}
    </nav>
  );
};

export default Navbar;
