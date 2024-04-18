const bgImage = "/assets/background/main_about_us_bg.png";

const Index = () => {
  return (
    <>
      <div
        className="w-full h-auto flex justify-center items-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="LEFT w-1/2 h-screen p-12">
          <h1 className="w-full h-full flex justify-center items-center text-md text-justify font-montserrat font-medium">
            BUZZY COFFEE AND MILKTEA PRODUCTS TRADING is a leading service
            provider in the catering industry with extensive experience in the
            Chinese market since 2013. Our business encompasses a wide range of
            products and services, including sales of brand-new and second-hand
            coffee machines, other bar equipments, supply of coffee ad milk tea
            raw materials, as well as coffee and milk tea training. <br />{" "}
            <br /> We also provide a comprehensive one-step solution, covering
            professional services such as training, product development,
            operational guidance for store openings, store decoration, and
            marketing event planning for store launches. Leveraging our 10 years
            of industry experience, we have successfully trained over 20,000 to
            30,000 coffee shop owners and accumulated valuable experience with
            numerous well-known brands. <br /> <br />
            Our mission is to help coffee shop owners succeed in a highly
            competitive market environment by providing exceptional products and
            services. With our rich industry experience and professional team,
            we will always create more value for our costumers and achieve a
            win-win development. We firmly believe that BUZZY COFFEE AND MILKTEA
            PRODUCTS TRADING will become an outstanding partner in the coffee
            industry between China and the Philippines, jointly writing a new
            chapter of brilliance
          </h1>
        </div>
        <div className="RIGHT w-1/2 h-screen flex justify-end items-start p-24">
          <h1 className="w-1/2 text-5xl text-[#634E30] font-montserrat font-bold">
            HANDMADE, WITH AN EXTRA PINCH OF LOVE
          </h1>
        </div>
      </div>
    </>
  );
};

export default Index;
