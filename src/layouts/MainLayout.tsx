import React, { useState, useEffect } from "react";
import Navbar from "@/components/users/navigation/Navbar";
import Footer from "@/components/users/footer/Footer";
import { Outlet } from "react-router-dom";
import LoadingComponent from "@/components/users/loading/LoadingComponent";

const MainLayout = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className="App min-h-screen overflow-y-auto overflow-x-hidden">
        <main className="min-h-screen flex flex-col bg-[#F6EBDA] text-black">
          <Navbar />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
