import React, { useState, useEffect } from "react";
import axiosClient from "@/api/axios-client";

interface Menu {
  id: number;
  image: string;
  name: string;
  category: string;
}

interface MenuCardProps {
  image: string;
  title: string;
  alt: string;
}

const Index: React.FC = () => {
  const [data, setData] = useState<Menu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosClient
      .get("/get-menu")
      .then((response) => {
        setData(response.data.menu);
      })
      .catch((error) => {
        console.error("Error in fetching menu data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const getAllCategories = (): string[] => {
    return [...new Set(data.map((item) => item.category))];
  };

  const getMenuByCategory = (category: string | null) => {
    if (!category) return data;
    return data.filter((item) => item.category === category);
  };

  const categoryTextFormat = (category: string): string => {
    return category.replace("_", " ").toUpperCase();
  };

  return (
    <div className="p-24 flex flex-col space-y-24 justify-center items-center">
      <div className="flex space-x-4">
        <button
          className="w-32 h-auto border px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-gray-200 hover:text-black"
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {getAllCategories().map((category) => (
          <button
            key={category}
            className="w-32 h-auto border px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-gray-200 hover:text-black"
            onClick={() => setSelectedCategory(category)}
          >
            {categoryTextFormat(category)}
          </button>
        ))}
      </div>
      {loading ? (
        <p className="text-center">Fetching Data</p>
      ) : (
        <div className="w-full h-auto space-y-24">
          <MenuSection
            category={selectedCategory}
            menu={getMenuByCategory(selectedCategory)}
          />
        </div>
      )}
    </div>
  );
};

const MenuSection: React.FC<{ category: string | null; menu: Menu[] }> = ({
  category,
  menu,
}) => {
  return (
    <div className="space-y-24">
      <h1 className="text-5xl font-montserrat font-bold">
        {category || "All Menu"}
      </h1>
      <div className="w-full h-full grid content-center space-y-4 lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        {menu.map((item: Menu) => (
          <MenuCard
            key={item.id}
            image={item.image}
            title={item.name}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
};

const MenuCard: React.FC<MenuCardProps> = ({ image, title, alt }) => {
  return (
    <div className="w-72 flex flex-col justify-center items-center rounded-xl lg:w-4/5">
      <div className="w-full h-full border-b overflow-hidden flex justify-center items-center">
        <img
          src={image}
          alt={`Photo of ${alt}`}
          className="w-full h-full object-contain"
        />
      </div>
      <h1 className="justify-center text-xl font-bold text-black w-full text-center">
        {title}
      </h1>
    </div>
  );
};

export default Index;
