import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

const sliderImages = [
  {
    source: "/assets/home/spanish_latte.png",
    alt: "Spanish Latte",
  },
  {
    source: "/assets/home/caramel_latte.png",
    alt: "Caramel Latte",
  },
];

const HomeTopCarousel = () => {
  return (
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
      className="w-11/12 h-11/12"
    >
      {sliderImages.map((image, index) => (
        <div
          key={index}
          className="w-full h-auto flex flex-col justify-center items-center lg:justify-center lg:items-start"
        >
          <img
            src={image.source}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="w-full flex justify-center items-center">
            <div className="-mt-12 w-3/4 h-3/4 bg-[#D7D7D7] text-black rounded-full flex justify-center items-center lg:w-60 lg:h-16 lg:-mt-24">
              <h1 className="text-sm font-semibold lg:text-xl">{image.alt}</h1>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HomeTopCarousel;
