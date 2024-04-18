import { useEffect, useState } from "react";
import { useStateContext } from "@/context/ContextProvider";
import axiosClient from "@/api/axios-client";
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { GoPeople } from "react-icons/go";

const LoadingIndicator = ({ isLoading }: { isLoading: boolean }) => (
  <div
    className={`h-1 bg-blue-500 absolute top-0 left-0 ${
      isLoading ? "w-screen" : "w-0"
    } transition-all duration-500 ease-in-out`}
  ></div>
);

const Sidebar = () => {
  const { setCurrentUser, setToken } = useStateContext();
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  useEffect(() => {
    if (isLoggingOut) {
      axiosClient.post("/logout").then(() => {
        setCurrentUser(null);
        setToken(null);
        setIsLoggingOut(false);
      });
    }
  }, [isLoggingOut, setCurrentUser, setToken]);

  const onLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLoggingOut(true);
  };

  return (
    <>
      <aside>
        <div className="w-full h-screen flex flex-col p-4 bg-white text-black uppercase shadow-lg">
          <div className="h-24" />
          <div className="links w-full flex flex-col justify-start items-start">
            <div className="h-16 p-4 flex justify-center items-start space-x-2">
              <RxDashboard className="w-6 h-6" />
              <NavLink to={"/admin-dashboard"} className="font-semibold">
                Dashboard
              </NavLink>
            </div>
            <div className="h-16 p-4 flex justify-center items-start space-x-2">
              <IoMenu className="w-6 h-6" />
              <NavLink to={"/admin-menu"} className="font-semibold">
                Products
              </NavLink>
            </div>
            <div className="h-16 p-4 flex justify-center items-start space-x-2">
              <GoPeople className="w-6 h-6" />
              <NavLink to={"/admin-coupon"} className="font-semibold">
                Influencers
              </NavLink>
            </div>
            <div className="h-16 p-4 flex justify-center items-start space-x-2">
              <GoPeople className="w-6 h-6" />
              <NavLink to={"/admin-customers"} className="font-semibold">
                Customers
              </NavLink>
            </div>
            <div className="h-16 p-4 flex justify-center items-start space-x-2">
              {isLoggingOut && <LoadingIndicator isLoading={isLoggingOut} />}
              <MdLogout className="w-6 h-6" />
              <button className="font-semibold" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
