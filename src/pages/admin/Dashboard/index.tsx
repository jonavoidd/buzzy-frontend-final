import { useState, useEffect } from "react";
import axiosClient from "@/api/axios-client";
import { MdMenuBook } from "react-icons/md";
import { GoPeople } from "react-icons/go";

interface DataCardsProps {
  title?: string;
  count?: number;
  icon?: React.ReactNode;
}

const Index = () => {
  const [menuCount, setMenuCount] = useState<number>(0);
  const [influencerCount, setInfluencerCount] = useState<number>(0);

  useEffect(() => {
    axiosClient
      .get("/get-count")
      .then((response) => {
        setMenuCount(response.data.menuCount);
        setInfluencerCount(response.data.influencerCount);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      })
      .finally(() => {});
  }, []);

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center p-12">
        <div className="h-24" />
        <div className="top w-full h-24 space-x-12 flex justify-start items-center">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <div className=" w-full h-auto flex justify-around items-center p-8 overflow-auto">
          <DataCards
            title="Menu Count"
            icon={<MdMenuBook />}
            count={menuCount}
          />
          <DataCards
            title="Influencer Count"
            icon={<GoPeople />}
            count={influencerCount}
          />
        </div>
      </div>
    </>
  );
};

const DataCards: React.FC<DataCardsProps> = ({ title, count, icon }) => {
  return (
    <div className="w-96 h-auto flex flex-col justify-start items-center border-2 shadow-lg p-4 space-y-6">
      <h1 className="w-full text-2xl font-montserrat font-bold text-start">
        {title}
      </h1>
      <div className="flex justify-center items-center space-x-4">
        <div className="w-24 h-24 rounded-full flex justify-center items-center text-7xl">
          {icon}
        </div>
        <h1 className="text-xl font-montserrat font-bold">{count}</h1>
      </div>
    </div>
  );
};

export default Index;
