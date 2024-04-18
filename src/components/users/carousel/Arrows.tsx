import { IonIcon } from "@ionic/react";
import { arrowBack } from "ionicons/icons";

export const RightArrow = () => {
  return <div></div>;
};

export const LeftArrow = () => {
  return (
    <div className="w-auto h-auto">
      <IonIcon icon={arrowBack} className="text-white w-24 h-24" />
    </div>
  );
};
