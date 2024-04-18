const Index = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-96 bg-white flex justify-between items-center p-32">
          <div className="w-1/2 h-auto flex flex-col justify-center items-center space-y-4">
            <img src="/assets/promo/select_coffee_icon.png" alt="Select Icon" />
            <h1 className="w-1/2 text-md text-center font-montserrat">
              <span className="font-bold text-xl">Select Your Coffe</span>
              <br />
              Choose your favorite coffee from the menu.
            </h1>
          </div>
          <div className="w-1/2 h-auto flex flex-col justify-center items-center space-y-4">
            <img src="/assets/promo/promo_icon.png" alt="Promo Icon" />
            <h1 className="w-1/2 text-md text-center font-montserrat">
              <span className="font-bold text-xl">Use The Promo Code</span>
              <br />
              Mention or enter the promo code during checkout.
            </h1>
          </div>
          <div className="w-1/2 h-auto flex flex-col justify-center items-center space-y-4">
            <img src="/assets/promo/phone_icon.png" alt="Phone Icon" />
            <h1 className="w-1/2 text-md text-center font-montserrat">
              <span className="font-bold text-xl">Redeem The Discount</span>
              <br />
              See the discount applied and complete your purchase
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
