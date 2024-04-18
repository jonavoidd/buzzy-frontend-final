interface inputDesign {
  formClassName?: string;
  divClassName?: string;
  inputClassName?: string;
}

const CircularInput: React.FC<inputDesign> = ({
  formClassName,
  divClassName,
  inputClassName,
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className={`${formClassName}`}>
        <div className={"flex items-center w-full h-full"}>
          <div className={`${divClassName} flex rounded`}>
            <input
              type="text"
              className={`${inputClassName} block w-full px-4 py-2 text-black border rounded-tl-full rounded-bl-full focus:border-gray-200 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40`}
              placeholder="Enter code"
            />
            <button
              className={
                "px-4 text-white bg-red-500 rounded-tr-full rounded-br-full"
              }
            >
              Enter
            </button>
          </div>
        </div>
      </form>{" "}
    </>
  );
};

export default CircularInput;
