import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const bgImage = "/assets/background/team_bg.png";
const devBg = "/assets/background/location_bg.png";
const kurt = "/assets/developers/kurt_dev.jpg";
const gail = "/assets/developers/gail_dev.jpg";
const chelsea = "/assets/developers/chels_dev.jpg";

interface DeveloperBoxProps {
  image?: string;
  alt?: string;
  name?: string;
  role?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

const Index = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center p-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-montserrat font-bold">Meet the Team</h1>
        <div className="w-full h-full flex mt-8 p-16 space-x-44">
          <DeveloperBox
            image={chelsea}
            alt="Kurt"
            name={"Chelsea Faye Dotillos"}
            role={"Designer"}
          />
          <DeveloperBox
            image={kurt}
            alt="Kurt"
            name={"Kurt Jonathan Gozano"}
            role={"Developer"}
            facebook="https://www.facebook.com/profile.php?id=100079960437007"
            instagram="https://www.instagram.com/krrrt_goz/"
            linkedin="https://www.linkedin.com/in/kurt-jonathan-gozano/"
            github="https://github.com/jonavoidd"
          />
          <DeveloperBox
            image={gail}
            alt="Kurt"
            name={"Gail Christney Duarte"}
            role={"Project Manager"}
          />
        </div>
      </div>
    </div>
  );
};

const DeveloperBox: React.FC<DeveloperBoxProps> = ({
  image,
  alt,
  name,
  role,
  facebook,
  instagram,
  linkedin,
  github,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="w-1/4 h-72 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="w-full h-full relative"
        style={{
          backgroundImage: `url(${devBg})`,
          backgroundSize: "cover",
        }}
      >
        {isHovered && (
          <div className="absolute inset-0 bg-gray-800 opacity-80 flex justify-center items-center">
            <div className="flex gap-4 text-white">
              <div className="social-icons absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-4">
                <SocialIcon
                  network="facebook"
                  url={facebook}
                  style={{ height: 38, width: 38 }}
                  target="_blank"
                />
                <SocialIcon
                  network="instagram"
                  url={instagram}
                  style={{ height: 38, width: 38 }}
                  target="_blank"
                />
                <SocialIcon
                  network="linkedin"
                  url={linkedin}
                  style={{ height: 38, width: 38 }}
                  target="_blank"
                />
                <SocialIcon
                  network="github"
                  url={github}
                  style={{ height: 38, width: 38 }}
                  target="_blank"
                />
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-full">
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="name-box w-full h-16 flex flex-col justify-center bg-gray-300">
        <h1 className="text-md font-semibold uppercase">{name}</h1>
        <h1 className="text-sm font-normal uppercase">{role}</h1>
      </div>
    </div>
  );
};

export default Index;
