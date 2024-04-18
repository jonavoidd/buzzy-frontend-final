import { useEffect, useState } from "react";
import axiosClient from "@/api/axios-client";

interface Menu {
  id: number;
  name: string;
  description: string;
  price: number;
  best_seller: boolean;
  image: string;
  category: string;
  created_at: string;
  updated_at: string;
}

const Index = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [filteredMenu, setFilteredMenu] = useState<Menu[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosClient
      .get("/get-menu")
      .then(({ data }) => {
        const sortedMenu = data.menu.sort((a: Menu, b: Menu) => a.id - b.id);
        setMenu(sortedMenu);
        setFilteredMenu(sortedMenu);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "") {
      setFilteredMenu(menu);
    } else {
      const filtered = menu.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredMenu(filtered);
    }
  }, [selectedCategory, menu]);

  return (
    <>
      <div className="w-full h-auto">
        <div className="h-24" />
        <div className="w-full h-auto p-12">
          <div className="top w-full h-24 space-x-12 flex justify-start items-center">
            <h1 className="text-xl font-bold">Category</h1>
            <select
              className="border-2 border-gray-400 rounded px-2 py-1"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="donut">Donut</option>
              <option value="frappe">Frappe</option>
              <option value="milktea">Milktea</option>
              <option value="coffee">Coffee</option>
              <option value="cheesecake">Cheesecake</option>
              <option value="fruit_tea">Fruit Tea</option>
              <option value="yogurt">Yogurt</option>
            </select>
          </div>
          <div className="table w-full h-auto overflow-auto">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : filteredMenu.length > 0 ? (
              <table className="w-full">
                <thead>
                  <tr>
                    {Object.keys(filteredMenu[0])
                      .filter(
                        (key) => key !== "created_at" && key !== "updated_at"
                      )
                      .map((key) => (
                        <th
                          key={key}
                          className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center"
                        >
                          {key.toUpperCase()}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredMenu.map((rowData, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className={
                        rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"
                      }
                    >
                      {Object.entries(rowData)
                        .filter(
                          ([key]) =>
                            key !== "created_at" && key !== "updated_at"
                        )
                        .map(([key, value], cellIndex) => (
                          <td
                            key={cellIndex}
                            className="w-auto h-auto px-4 py-2"
                          >
                            {key === "image" && typeof value === "string" ? (
                              <a
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={value}
                                  alt={`Image for ${rowData.name}`}
                                  style={{
                                    width: "100px",
                                    height: "100px",
                                    objectFit: "contain",
                                  }}
                                />
                              </a>
                            ) : key === "category" ? (
                              value === "fruit_tea" ? (
                                "Fruit Tea"
                              ) : (
                                value.charAt(0).toUpperCase() + value.slice(1)
                              )
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-center">No data available</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
