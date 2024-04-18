import "@/App.css";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to={"/admin-dashboard"} />;
  }

  return (
    <>
      <div className="App min-h-screen overflow-y-auto overflow-x-hidden">
        <main className="min-h-screen bg-gray-100 text-black">
          <div className="h-full w-full grid grid-cols-2 gap-16">
            {/* Left Side */}
            <div className="h-screen w-full flex justify-center items-center">
              <img
                src="/assets/logos/4.png"
                alt="Logo"
                className="m-auto ml-24"
              />
            </div>
            {/* Right Side */}
            <div className="right-side flex justify-center items-center">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default GuestLayout;
