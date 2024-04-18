import HomeTopCarousel from "@/components/users/carousel/HomeTopCarousel";
import HomeCarousel from "@/components/users/carousel/HomeCarousel";
import Promo from "@/pages/users/Promo";
import HomeAboutComponent from "@/components/users/pages/HomeAboutComponent";
import HomeGIF from "@/components/users/pages/HomeGIF";
import HomePromoComponent from "@/components/users/pages/HomePromoComponent";

const bgImage = "/assets/background/home-bg.png";

const Index = () => {
  return (
    <>
      <div
        className="w-full h-auto flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="w-full h-auto flex flex-col-reverse lg:flex-row">
          {/* LEFT SIDE OF THE SCREEN */}
          <div className="LEFT flex flex-col justify-between items-center px-12 pt-8 w-full h-80 lg:h-auto lg:w-3/5 lg:items-start lg:pt-24 lg:pl-36">
            <div className="flex flex-col justify-center items-start w-full h-auto space-y-4 lg:text-start">
              <h1 className="text-4xl font-semibold font-montserrat lg:text-7xl">
                Sip, <span className="text-red-500">Save</span>, Repeat
              </h1>
              <h1 className="w-full text-xl text-justify font-medium font-montserrat lg:text-start lg:text-4xl">
                Treat Yourself to Coffee Bliss with Our Exclusive Promo!
              </h1>
            </div>
            <h1 className="text-4xl font-montserrat font-bold">Popular Now</h1>
          </div>
          {/* RIGHT SIDE OF THE SCREEN */}
          <div className="RIGHT w-full h-auto flex justify-center items-center p-4 lg:p-0 lg:justify-start lg:items-start lg:w-2/5">
            <HomeTopCarousel />
            {/* <div className="w-full h-auto flex flex-col justify-center items-center lg:justify-center lg:items-start">
              <img
                src="/assets/home/spanish_latte.png"
                alt="spanish latter image"
                className="w-11/12 h-11/12 object-cover"
              />
              <div className="w-full flex justify-center items-center">
                <div className="-mt-12 w-1/2 h-12 bg-[#D7D7D7] text-black rounded-full flex justify-center items-center lg:mr-12 lg:w-60 lg:h-16 lg:-mt-24">
                  <h1 className="text-xl font-semibold">Spanish Latte</h1>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="w-full h-auto">
          <div className="w-full h-24 lg:h-64" />
        </div>
      </div>
      <HomeCarousel />
      <Promo />
      <div className="w-full h-44 bg-white" />
      <HomeAboutComponent />
      <HomeGIF />
      <HomePromoComponent />
    </>
  );
};

export default Index;
