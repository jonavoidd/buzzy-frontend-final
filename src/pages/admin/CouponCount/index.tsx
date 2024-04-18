import axiosClient from "@/api/axios-client";
import { useEffect, useState } from "react";
import CreateInfluencerAccount from "@/components/admin/modals/influencer/CreateInfluencerAccount";

interface Users {
  id: number;
  name: string;
  email: string;
  coupon_codes: {
    codes: string;
    usage: number;
  }[];
  created_at: string;
  updated_at: string;
}

// interface Coupon {
//   id: number;
//   influencer: {
//     id: number;
//     name: string;
//     email: string;
//     created_at: string;
//   };
//   codes: string;
//   usage: number;
// }

const Index = () => {
  const [users, setUsers] = useState<Users[]>([]);
  // const [coupon, setCoupon] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const fetchInfluencersData = () => {
    axiosClient
      .get("/get-influencers")
      .then((res) => {
        setUsers(res.data.users);
        console.log("Successful retrieval of influencer data:", res);
      })
      .catch((err) => {
        console.error("Error in fetching Influencer Data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfluencersData();
    const pollingInterval = setInterval(fetchInfluencersData, 5000);
    return () => clearInterval(pollingInterval);
  }, []);

  const handleAddModalOpen = () => {
    setShowAddModal(true);
  };

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center p-12">
        <div className="h-24" />
        <div className="top w-full h-24 space-x-12 flex justify-start items-center">
          <h1 className="text-xl font-bold">Influencers</h1>
          <button
            type="button"
            className="inline-block rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-blue-300"
            data-twe-ripple-init
            onClick={handleAddModalOpen}
          >
            Add Influencer
          </button>
        </div>
        <div className="table w-full h-auto overflow-auto">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : users?.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Id
                  </th>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Name
                  </th>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Email
                  </th>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Code
                  </th>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Usage
                  </th>
                  <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((influencer, index) => (
                  <tr
                    key={influencer.id}
                    className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                  >
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.id}
                    </td>
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.name}
                    </td>
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.email}
                    </td>
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.coupon_codes
                        .map((coupon) => coupon.codes)
                        .join(", ")}
                    </td>
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.coupon_codes
                        .map((coupon) => coupon.usage)
                        .join(", ")}
                    </td>
                    <td className="w-auto h-auto px-4 py-2 text-center">
                      {influencer?.created_at}
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

      {showAddModal && (
        <CreateInfluencerAccount onClose={() => setShowAddModal(false)} />
      )}
    </>
  );
};
export default Index;
