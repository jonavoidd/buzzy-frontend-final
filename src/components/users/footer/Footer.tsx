import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const logo = "/assets/logos/3.png";
const Footer = () => {
  return (
    <footer className="w-screen h-auto bg-[#F6EBDA] shadow border-t">
      <div className="h-auto p-4 py-12 flex flex-col justify-center items-center">
        <div className="row-one flex flex-row justify-center space-x-8 w-full h-auto font-semibold">
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/menu"}>Menu</NavLink>
          <NavLink to={"/faqs"}>Faqs</NavLink>
          <NavLink to={"/contacts"}>Contacts</NavLink>
          <NavLink to={"/developers"}>Team</NavLink>
          <div className="flex flex-row space-x-4">
            <h1 className="text-xl font-medium -mt-1">|</h1>
            &nbsp;&nbsp;&nbsp;
            <SocialIcon
              network="facebook"
              style={{ height: 28, width: 28 }}
              url="https://www.facebook.com/buzzybuzzycafe"
            />
            <SocialIcon
              network="instagram"
              style={{ height: 28, width: 28 }}
              url="instagram.com"
            />
            <SocialIcon
              network="tiktok"
              style={{ height: 28, width: 28 }}
              url="https://www.tiktok.com/@buzzy_coffee"
            />
          </div>
        </div>
        <img src={logo} alt="Logo" className="w-96 h-24" />
        <h1 className="text-xl font-montserrat font-semibold">Site Map</h1>
        <h1 className="mt-4 text-sm font-montserrat font-semibold">
          Copyright@2024, BuzzyBuzzy
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
