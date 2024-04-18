import { useEffect, useState } from "react";
import axiosClient from "@/api/axios-client";
import AddMenuModal from "@/components/admin/modals/Menu/AddMenuModal";
import EditMenuModal from "@/components/admin/modals/Menu/EditMenuModal";
import DeleteMenuModal from "@/components/admin/modals/Menu/DeleteMenuModal";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

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
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchMenuData = () => {
    axiosClient
      .get("/get-menu")
      .then((response) => {
        const sortedMenu = response.data.menu.sort(
          (a: Menu, b: Menu) => a.id - b.id
        );
        setMenu(sortedMenu);
        setFilteredMenu(sortedMenu);
      })
      .catch((error) => {
        console.error("Error in fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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

  useEffect(() => {
    fetchMenuData();
    const pollingInterval = setInterval(fetchMenuData, 5000); // Polling every 5 seconds
    return () => clearInterval(pollingInterval);
  }, []);

  const handleAddModalOpen = () => {
    setShowAddModal(true);
  };

  const handleEditModalOpen = (id: number) => {
    setSelectedItemId(id);
    setShowEditModal(true);
  };

  const handleDeleteModalOpen = (id: number) => {
    setSelectedItemId(id);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center p-12">
        <div className="h-24" />
        <div className="top w-full h-24 space-x-12 flex justify-start items-center">
          <h1 className="text-xl font-bold">Products</h1>
          <button
            type="button"
            className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-blue-300"
            data-twe-ripple-init
            onClick={handleAddModalOpen}
          >
            Add Menu
          </button>
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
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredMenu.map((rowData, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    {Object.entries(rowData)
                      .filter(
                        ([key]) => key !== "created_at" && key !== "updated_at"
                      )
                      .map(([key, value], cellIndex) => (
                        <td key={cellIndex} className="w-auto h-auto px-4 py-2">
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
                    <td className="w-full h-full flex px-4 py-2 items-center">
                      <button
                        className="w-full h-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => handleEditModalOpen(rowData.id)}
                      >
                        <MdOutlineEdit />
                      </button>
                      <button
                        className="w-full h-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                        onClick={() => handleDeleteModalOpen(rowData.id)}
                      >
                        <MdDeleteOutline />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center">No data available</p>
          )}
        </div>
      </div>

      {showAddModal && <AddMenuModal onClose={() => setShowAddModal(false)} />}
      {showEditModal && (
        <EditMenuModal
          onClose={() => setShowEditModal(false)}
          itemId={selectedItemId}
        />
      )}
      {showDeleteModal && (
        <DeleteMenuModal
          onClose={() => setShowDeleteModal(false)}
          itemId={selectedItemId}
        />
      )}
    </>
  );
};

export default Index;
