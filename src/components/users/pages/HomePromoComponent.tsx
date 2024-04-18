import { useState } from "react";
import UseCodeButton from "../code_input/UseCodeButton";
import CustomerUsage from "../code_input/CutomerUsage";

const bgImage = "/assets/background/promo_code_bg.png";

const HomePromoComponent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full h-screen relative">
        <div
          className="absolute inset-0 opacity-75 z-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-20 w-full h-full flex flex-col justify-center items-center space-y-4">
          <h1 className="text-6xl font-montserrat font-bold">PROMO CODE</h1>
          <h1 className="text-2xl font-montserrat font-medium">
            Don't miss out! Dive into refreshment with a <br /> free drink – Get
            yours now!
          </h1>
          <div className="w-1/4 h-16 flex justify-center">
            <UseCodeButton
              formClassName="w-full h-full"
              divClassName="w-full h-full"
              onClick={handleModalOpen}
            />
          </div>
        </div>
      </div>

      {showModal && <CustomerUsage onClose={() => setShowModal(false)} />}
    </>
  );
};

export default HomePromoComponent;
