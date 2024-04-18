import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const bgImage = "/assets/background/bg-carousel.png";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
  },
};

const sliderImages = [
  {
    source: "/assets/carousel/matcha_latte.png",
    alt: "Matcha Latte",
  },
  {
    source: "/assets/carousel/buzzy_classic_coco.png",
    alt: "Buzzy Classic Coco",
  },
  {
    source: "/assets/carousel/cereal_drink.png",
    alt: "Cereal Drink",
  },
  {
    source: "/assets/carousel/choco_top.png",
    alt: "Choco Top",
  },
  {
    source: "/assets/carousel/vanilla_latte.png",
    alt: "Vanilla Latte",
  },
  {
    source: "/assets/carousel/iced_americano.png",
    alt: "Iced Americano",
  },
];

const HomeCarousel = () => {
  return (
    <div className="w-full h-full relative lg:h-1/2 ">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 opacity-75 brightness-50 z-10"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      ></div>

      {/* Carousel Content */}
      <div className="relative h-72 z-20 px-4 -mt-32 lg:h-auto lg:p-32 lg:-mt-72">
        <Carousel
          arrows={false}
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          infinite={true}
          showDots={true}
          autoPlaySpeed={2000}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
          className="w-full h-full flex justify-between items-center"
        >
          {/* Images */}
          {sliderImages.map((image, index) => (
            <div
              className="w-full h-auto flex flex-col justify-center items-center"
              key={index}
            >
              <img
                src={image.source}
                alt={image.alt}
                className="w-full h-full"
              />
              <div className="w-full flex justify-center items-center">
                <div className="-mt-12 w-3/4 h-3/4 bg-[#D7D7D7] text-black rounded-full flex justify-center items-center lg:w-60 lg:h-16 lg:-mt-24">
                  <h1 className="text-sm font-semibold lg:text-xl">
                    {image.alt}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
