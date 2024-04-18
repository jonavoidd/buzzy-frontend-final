import { useEffect, useRef, useState } from "react";
import axiosClient from "@/api/axios-client";
import { useStateContext } from "@/context/ContextProvider";

const LoadingIndicator = ({ isLoading }: { isLoading: boolean }) => (
  <div
    className={`h-1 bg-blue-500 w-full absolute top-0 left-0 ${
      isLoading ? "w-full" : "w-0"
    } transition-all duration-500 ease-in-out`}
  />
);

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const { setCurrentUser, setToken } = useStateContext();

  useEffect(() => {
    if (isLoading) {
      const payload = {
        email: emailRef.current?.value,
        password: passRef.current?.value,
      };

      axiosClient
        .post("/login", payload)
        .then(({ data }) => {
          setCurrentUser(data.user);
          setToken(data.token);
        })
        .catch((err) => {
          const response = err.response;
          if (response && response.status == 422) {
            setErrors(response.data.errors);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isLoading, setCurrentUser, setToken]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <div className="w-3/4 h-3/4 bg-gray-200 transition duration-400 ease-in-out rounded-xl flex justify-center items-center shadow-md">
      {isLoading && <LoadingIndicator isLoading={isLoading} />}
      <form
        onSubmit={handleLogin}
        className="text-black p-12 space-y-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold">LOGIN PAGE</h1>
        {errors && (
          <p style={{ color: "red" }}>
            {Object.keys(errors).map((key) => (
              <p key={key}>{errors[key][0]}</p>
            ))}
          </p>
        )}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="John@email.com"
            // name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-800"
          >
            Password
          </label>
          <input
            ref={passRef}
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            // name="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            required
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
        <button
          type="submit"
          className="w-2/5 text-black bg-[#fed597] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
