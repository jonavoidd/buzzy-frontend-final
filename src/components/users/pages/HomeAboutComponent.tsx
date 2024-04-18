const bgImage = "/assets/background/about_us_bg.png";

const HomeAboutComponent = () => {
  return (
    <div className="w-full h-auto relative">
      <div
        className="absolute inset-0 opacity-75 z-10"
        style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
      />
      <div className="relative flex flex-row h-72 z-20 px-4 -mt-32 lg:h-auto lg:p-32 lg:-mt-60">
        <img
          src="/assets/about/about_us_image.png"
          alt="About Us Coffee"
          className="w-1/2 h-1/2"
        />
        <div className="w-full h-auto mt-40 flex flex-col justify-start p-10">
          <h1 className="text-xl text-start font-montserrat font-semibold">
            <span className="text-4xl font-montserrat font-bold">About Us</span>{" "}
            <br /> We provide quality coffee and ready to drink
          </h1>
          <br />
          <p className="w-full h-auto text-justify font-montserrat">
            In 2020, BUZZY COFFEE AND MILKTEA PRODUCTS TRADING, entered the
            Philippine market and established a brand in Cebu. We are committed
            to providing local coffee shops with high-quality, cost-effective
            second-hand coffee machines, helping store owners save up to 60% in
            costs.
          </p>
          <br />
          <button className="w-32 h-10 rounded-full bg-[#D19F55] font-bold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutComponent;
