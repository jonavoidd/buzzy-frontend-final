interface inputDesign {
  formClassName?: string;
  divClassName?: string;
  onClick?: () => void;
}

const UseCodeButton: React.FC<inputDesign> = ({
  formClassName,
  divClassName,
  onClick,
}) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className={`${formClassName}`}>
        <div className={"flex items-center w-full h-full"}>
          <div className={`${divClassName} flex rounded px-12`}>
            <button
              className={
                "w-full h-full px-4 text-white bg-red-500 rounded-full shadow-md hover:bg-red-600 transition duration-300 ease-out"
              }
              onClick={onClick}
            >
              Send Code
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UseCodeButton;
