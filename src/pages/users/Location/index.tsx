import { IonIcon } from "@ionic/react";
import { pin, navigate, time } from "ionicons/icons";

const bgImage = "/assets/background/location_bg.png";

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
        <div className="w-full h-screen flex justify-center items-center">
          <div className="LEFT w-1/2 h-full flex flex-col justify-start items-end p-24 space-y-4">
            <h1 className="w-11/12 flex justify-normal items-start text-3xl font-montserrat font-bold">
              Location and Hours
            </h1>
            <div className="w-11/12 h-auto bg-white rounded-xl p-8 space-y-4">
              <div className="w-full h-12 flex justify-start items-center rounded-full bg-stone-300 px-4 shadow-md font-semibold">
                <IonIcon icon={pin} className="text-red-500 w-6 h-6" />
                &nbsp;&nbsp; Buzzy Buzzy Coffee
              </div>
              <div className="w-full h-12 flex justify-start items-center rounded-full bg-stone-300 px-4 shadow-md font-semibold">
                <IonIcon icon={navigate} className="text-red-500 w-6 h-6" />
                &nbsp;&nbsp; Sanciangko Cor. Pelaez St. Cebu City
              </div>
              <div className="w-full h-auto flex flex-col justify-start items-start rounded-xl bg-stone-300 p-4 shadow-md font-semibold space-y-2">
                <div className="flex justify-center items-center">
                  <IonIcon icon={time} className="text-red-500 w-6 h-6" />
                  &nbsp;&nbsp; Hours of Operation
                </div>
                <div className="ml-12">
                  <ul className="list-disc text-justify">
                    <li>Monday to Friday: 7:00 AM - 7:00 PM</li>
                    <li>Saturday: 8:00 AM - 6:00 PM</li>
                    <li>Sunday: 9:00 AM - 5:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-auto bg-white rounded-xl p-8 text-justify text-md font-medium hover:scale-105 transition-transform duration-300">
              Join us at BuzzyBuzzy Coffee Shop for your daily dose of delicious
              coffee and cozy ambiance! We look forward to serving you.
            </div>
          </div>
          <div className="RIGHT w-1/2 h-full py-12 pr-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.544354663922!2d123.89601687456958!3d10.298248567832704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999586a3f42ab%3A0x95ee23b7e35d3e80!2sBuzzy%20Buzzy%20Coffee%20-%20Sanciangko!5e0!3m2!1sen!2sph!4v1711766203734!5m2!1sen!2sph"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full rounded-sm"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
