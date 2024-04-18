import { useStateContext } from "@/context/ContextProvider";

interface User {
  name: string;
}

interface TopbarProps {
  currentUser: User | null;
}

const Topbar: React.FC<TopbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-screen h-24 bg-[#FFF0D9] z-30 shadow-lg flex justify-end items-center p-4 px-16">
      <h1 className="text-xl font-montserrat font-bold z-40">
        {currentUser?.name}
      </h1>
    </div>
  );
};

export default Topbar;
