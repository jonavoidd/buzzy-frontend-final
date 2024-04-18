const Index = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center p-12 font-montserrat">
      <h1 className="text-[#E55050] text-4xl font-bold">Contact Us</h1>
      <div className="w-full h-auto flex justify-between items-center">
        <div className="LEFT w-1/2 justify-end">
          <h1 className="text-xl mt-4 font-semibold uppercase">
            General Inquiries
          </h1>
          <div className="w-full h-auto mt-2">
            (Mondays to Fridays) <br />
            buzzybuzzy2023@gmail.com <br />
            Customer Care: +63 947 784 9701
          </div>
        </div>
        <div className="RIGHT w-1/2">
          <h1 className="text-xl mt-4 font-semibold uppercase">
            Buzzy Coffee Machine Supplier
          </h1>
          <div className="w-full h-auto mt-2">
            buzzybuzzy2023@gmail.com <br />
            +63 960304 6363
          </div>
        </div>
      </div>
      <h1 className="text-md mt-16 font-semibold">
        Or send us a message down below
      </h1>
      <form className="w-11/12 h-auto flex flex-col justify-start text-start p-12 bg-[#FFF1DD] mt-4 rounded-xl text-[#634E30] font-medium space-y-10">
        <div className="w-full h-16 flex justify-start text-start">
          <div className="LEFT-form w-1/2 h-auto flex flex-col justify-start px-24">
            <label htmlFor="Name" className="ml-2">
              Name
            </label>
            <input type="text" className="w-auto h-12 rounded-xl" />
          </div>
          <div className="RIGHT-form w-1/2 h-auto flex flex-col justify-start px-24">
            <label htmlFor="Name" className="ml-2">
              Email
            </label>
            <input type="text" className="w-auto h-12 rounded-xl" />
          </div>
        </div>
        <div className="w-auto h-auto flex flex-col justify-start px-24">
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="text" className="w-auto h-12 rounded-xl" />
        </div>
        <div className="w-auto h-auto flex flex-col justify-start px-24">
          <label htmlFor="Message">Message</label>
          <textarea className="w-auto h-auto rounded-xl" rows={6} />
        </div>
      </form>
    </div>
  );
};

export default Index;
