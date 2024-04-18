import axiosClient from "@/api/axios-client";
import { useEffect, useState } from "react";

interface Customers {
  id: number;
  name: string;
  fb_link: string;
  codes: string;
}

const Index = () => {
  const [customers, setCustomers] = useState<Customers[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchCustomerData = () => {
    axiosClient
      .get("/get-customers")
      .then((res) => {
        setCustomers(res.data.customers);
        console.log("Users data successfully fetched:", res);
      })
      .catch((err) => {
        console.error("Error in fetching customer data:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCustomerData();
    const pollingInterval = setInterval(fetchCustomerData, 60000);
    return () => clearInterval(pollingInterval);
  });

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center p-12">
      <div className="h-24" />
      <div className="top w-full h-24 space-x-12 flex justify-start items-center">
        <h1 className="text-xl font-bold">Customers</h1>
      </div>
      <div className="table w-full h-auto overflow-auto">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : customers?.length > 0 ? (
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
                  Facebook Link
                </th>
                <th className="px-4 py-2 text-center text-back bg-gray-300 justify-center items-center">
                  Code Used
                </th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr
                  key={customer.id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="w-auto h-auto px-4 py-2 text-center">
                    {customer?.id}
                  </td>
                  <td className="w-auto h-auto px-4 py-2 text-center">
                    {customer?.name}
                  </td>
                  <td className="w-auto h-auto px-4 py-2 text-center">
                    {customer?.fb_link}
                  </td>
                  <td className="w-auto h-auto px-4 py-2 text-center">
                    {customer?.codes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Index;
