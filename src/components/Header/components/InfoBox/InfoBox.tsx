import { IoInformationOutline } from "react-icons/io5";
import { boxStyles } from "../constants";

const InfoBox = () => {
  return (
    <button className={`${boxStyles}`}>
      <IoInformationOutline className="text-xl" />
    </button>
  );
};

export default InfoBox;
