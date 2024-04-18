import { useRef, useState } from "react";
import { ring } from "ldrs";
import axiosClient from "@/api/axios-client";

ring.register();

interface ModalProps {
  onClose: () => void;
}

const CustomerUsage: React.FC<ModalProps> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const fbLinkRef = useRef<HTMLInputElement>(null);
  const codeRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: nameRef.current?.value,
      fb_link: fbLinkRef.current?.value,
      codes: codeRef.current?.value,
    };

    axiosClient
      .post("/use-coupon-code", payload)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.error("Error with adding data", err);
      })
      .finally(() => {
        onClose();
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
            {errors && (
              <h1 style={{ color: "red" }}>
                {Object.keys(errors).map((key) => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </h1>
            )}

            {/* Section to add Name */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="name" className="text-gray-600">
                Set Name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
                required
              />
            </div>
            {/* Section to add Facebook Link */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="fblink" className="text-gray-600">
                Set Facebook Link
              </label>
              <input
                ref={fbLinkRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
                required
              />
            </div>
            {/* Section to add Code */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="confirm_password" className="text-gray-600">
                Set Code
              </label>
              <input
                ref={codeRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
              />
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

export default CustomerUsage;
