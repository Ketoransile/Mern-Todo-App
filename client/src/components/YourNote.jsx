import Logo from "./Logo";
// import backgroundImage from "../assets/backgroundSvg.svg";
import { useTranslation } from "react-i18next";
import backgroundImage from "../assets/backgroundImage.png";
const YourNote = () => {
  const { t } = useTranslation();
  return (
    <div
      className=" bg-cover bg-center w-80 flex flex-col justify-center items-center gap-5 h-56 lg:h-auto"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <div className="bg-slate-600 bg-opacity-10 p-6 pt-20 pb-20 rounded-md"> */}

      <Logo />
      <h1 className="text-white text-4xl">{t("yourNotes")}</h1>
    </div>
  );
};

export default YourNote;
