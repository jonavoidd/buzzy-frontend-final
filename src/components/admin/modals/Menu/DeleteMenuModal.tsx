import React, { useState } from "react";
import axiosClient from "@/api/axios-client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
  onClose: () => void;
  itemId: number | null;
}

const DeleteMenuModal: React.FC<ModalProps> = ({ onClose, itemId }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (itemId !== null) {
        await axiosClient.delete(`/delete-menu/${itemId}`);
        deleteSuccessToast();
        onClose();
      }
    } catch (error) {
      console.error("Error deleting the menu:", error);
      deleteFailedToast();
    } finally {
      setLoading(false);
    }
  };

  const deleteSuccessToast = () => {
    toast.success("Item successfully deleted.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const deleteFailedToast = () => {
    toast.error("Error in deleting item.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <>
      <div className="fixed overflow-y-auto inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        <div className="w-5/12 h-auto overflow-y-auto flex flex-col justify-center items-center space-y-8 bg-gray-200 p-8 rounded-xl">
          <form
            onSubmit={onSubmit}
            className="w-full flex flex-col justify-start items-start space-y-4 overflow-y-auto overflow-x-hidden"
          >
            <p className="text-red-600 text-lg font-semibold">
              Are you sure you want to delete this item?
            </p>
            {loading && <div className="text-blue-500">Loading...</div>}
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                className="w-16 h-12 text-md text-white bg-green-500 rounded-lg"
                type="submit"
              >
                Yes
              </button>
              <button
                className="w-16 h-12 text-md text-white bg-red-500 rounded-lg"
                onClick={onClose}
              >
                No
              </button>
            </div>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteMenuModal;
