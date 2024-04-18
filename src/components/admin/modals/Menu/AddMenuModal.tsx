import React, { useRef, useState } from "react";
import axiosClient from "api/axios-client";
import { ring } from "ldrs";

ring.register();

interface ModalProps {
  onClose: () => void;
}

const AddMenuModal: React.FC<ModalProps> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const [bestSeller, setBestSeller] = useState<string>("false");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBestSeller("true");
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", nameRef.current?.value || "");
    formData.append("description", descriptionRef.current?.value || "");
    formData.append("price", priceRef.current?.value || "");
    formData.append(
      "best_seller",
      bestSeller !== null ? bestSeller.toString() : "false"
    );

    if (imageRef.current?.files?.length) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/gif",
      ];
      const file = imageRef.current?.files[0];

      if (validImageTypes.includes(file.type)) {
        formData.append("image", file);
      } else {
        alert("Please return a valid image file.");
        return;
      }
    }

    formData.append("category", categoryRef.current?.value || "");

    axiosClient
      .post("/post-menu", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(({ data }) => {
        console.log("Menu successfully added:", data);
        onClose();
      })
      .catch((error) => {
        console.error("Error adding menu:", error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="fixed overflow-y-auto inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
        {submitting && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <l-ring
              size="100"
              stroke="5"
              bg-opacity="0"
              speed="2"
              color="white"
            />
          </div>
        )}
        <div className="w-5/12 h-auto overflow-y-auto flex flex-col justify-center items-center space-y-8 bg-white p-8 rounded-xl">
          {/* Starting here is the form for upload */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col justify-start items-start space-y-4 overflow-y-auto overflow-x-hidden"
          >
            {/* Line to add an Image */}
            <div className="flex flex-col justify-start items-start">
              <label htmlFor="image" className="text-gray-600">
                Choose Image
              </label>
              <input ref={imageRef} type="file" />
            </div>
            {/* Line to add a Title */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="name" className="text-gray-600">
                Set Title
              </label>
              <input
                ref={nameRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
              />
            </div>
            {/* Line to add a Description */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="description" className="text-gray-600">
                Set Description
              </label>
              <textarea
                ref={descriptionRef}
                className="p-2 h-16 w-full border-2 bg-white text-gray-600 rounded-lg"
              />
            </div>
            {/* Line to add a Price */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="price" className="text-gray-600">
                Set Price
              </label>
              <input
                ref={priceRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
              />
            </div>
            {/* Line to add a category */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="price" className="text-gray-600">
                Set Category
              </label>
              <select
                ref={categoryRef}
                id="category"
                className="h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
              >
                <option value="Donut" defaultValue={"Select Category"}>
                  Select Category
                </option>
                <option value="donut">Donut</option>
                <option value="frappe">Frappe</option>
                <option value="milktea">Milktea</option>
                <option value="coffee">Coffee</option>
                <option value="cheesecake">Cheesecake</option>
                <option value="fruit_tea">Fruit Tea</option>
                <option value="yogurt">Yogurt</option>
              </select>
            </div>
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                className={`w-16 h-10 text-md text-white rounded-lg ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-700"
                }`}
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>

              <button
                className="w-16 h-10 text-md text-white bg-red-500 rounded-lg"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMenuModal;
