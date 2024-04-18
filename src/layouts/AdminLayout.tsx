import "@/App.css";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "context/ContextProvider";
import axiosClient from "api/axios-client";
import Sidebar from "@/components/admin/navigation/Sidebar";
import Topbar from "@/components/admin/navigation/Topbar";

const AdminLayout = () => {
  const { currentUser, token, setCurrentUser } = useStateContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setCurrentUser(data);
    });
  }, []);

  return (
    <>
      <div className="App min-h-screen overflow-y-auto overflow-x-hidden">
        <main className="min-h-screen bg-gray-100 text-black flex flex-shrink-0">
          <div className="left w-1/6 h-full">
            <Topbar currentUser={currentUser} />
            <div className="w-1/6 h-full fixed">
              <Sidebar />
            </div>
          </div>
          <div className="right w-5/6 flex-1 h-full overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
