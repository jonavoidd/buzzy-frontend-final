import { useRef, useState } from "react";
import { ring } from "ldrs";
import axiosClient from "@/api/axios-client";

ring.register();

interface ModalProps {
  onClose: () => void;
}

const CreateInfluencerAccount: React.FC<ModalProps> = ({ onClose }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const confirmPassRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const payload = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passRef.current?.value,
      password_confirmation: confirmPassRef.current?.value,
    };

    axiosClient
      .post("/post-influencer", payload)
      .then(({ data }) => {
        console.log(data);
        onClose();
      })
      .catch((err) => {
        const response = err.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
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
            {/* Section to add Email */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="name" className="text-gray-600">
                Set Email
              </label>
              <input
                ref={emailRef}
                type="text"
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
                required
              />
            </div>
            {/* Section to add Password */}
            <div className="w-full flex flex-col justify-start items-start">
              <label htmlFor="name" className="text-gray-600">
                Set Password
              </label>
              <input
                ref={passRef}
                type={isPasswordVisible ? "text" : "password"}
                className="p-2 h-12 w-full border-2 bg-white text-gray-600 rounded-lg"
                required
              />
            </div>
            {/* Section to add Confirm Password */}
            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="confirm_password"
                className="text-sm font-medium text-gray-800"
              >
                Confirm Password
              </label>
              <input
                ref={confirmPassRef}
                type={isPasswordVisible ? "text" : "password"}
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <div className="flex justify-end items-center space-x-2">
                <span className="text-sm text-gray-600">Show password</span>
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  checked={isPasswordVisible}
                  onChange={togglePasswordVisibility}
                />
              </div>
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

export default CreateInfluencerAccount;
