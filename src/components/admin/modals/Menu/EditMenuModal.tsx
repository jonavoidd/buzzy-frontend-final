import React, { useEffect, useState } from "react";
import axiosClient from "@/api/axios-client";
import { ring } from "ldrs";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";

ring.register();

interface ModalProps {
  onClose: () => void;
  itemId: number | null;
}

interface MenuData {
  name: string;
  description: string;
  price: string;
  best_seller?: string;
  category: string;
}

const EditMenuModal: React.FC<ModalProps> = ({ onClose, itemId }) => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm();
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [image, setImage] = useState<File | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/gif": [".gif"],
    },
    onDrop: (acceptedFile) => {
      setImage(acceptedFile[0]);
    },
  });

  useEffect(() => {
    if (itemId) {
      axiosClient
        .get(`/show-menu/${itemId}`)
        .then(({ data }) => {
          setMenuData(data.menu);
          setValue("name", data.menu.name);
          setValue("description", data.menu.description);
          setValue("price", data.menu.price);
          setValue("category", data.menu.category);
        })
        .catch((error: Error) => {
          console.error("Error in fetching menu data:", error);
        });
    }
  }, [itemId]);

  const onSubmit = async (inputData) => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("description", inputData.description);
    formData.append("price", inputData.price?.toString() || "");
    formData.append("category", inputData.category);

    if (image) {
      formData.append("image", image);
    }

    axiosClient
      .post(`/edit-menu/${itemId}`, formData)
      .then(({ data }) => {
        console.log("Menu data successfully edited:", data);
        onClose();
      })
      .catch((error) => {
        console.error("Error updating menu:", error);
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
        <div className="w-5/12 h-auto overflow-y-auto flex flex-col justify-center items-center space-y-8 bg-gray-200 p-8 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col justify-start items-start space-y-4 overflow-y-auto overflow-x-hidden"
          >
            <div {...getRootProps({ className: "dropzone" })}>
              <input type="file" {...getInputProps()} />
              {image ? (
                <p>Image: {image.name} </p>
              ) : (
                <p>Drag and drop or click selected image</p>
              )}
            </div>

            <input
              type="text"
              className="w-full h-12 rounded-xl px-4"
              placeholder="Name"
              {...register("name")}
            />
            <input
              type="text"
              className="w-full h-12 rounded-xl px-4"
              placeholder="Description"
              {...register("description")}
            />
            <input
              type="number"
              className="w-full h-12 rounded-xl px-4"
              placeholder="Price"
              {...register("price")}
            />
            <select
              id="category"
              className="h-12 w-full border-2 border-black bg-white text-gray-600 rounded-lg"
              {...register("category")}
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
            <div className="w-full flex justify-end items-end space-x-3">
              <button
                className="w-16 h-10 text-md text-white bg-green-500 rounded-lg"
                type="submit"
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

export default EditMenuModal;
