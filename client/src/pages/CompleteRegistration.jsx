import YourNote from "../components/YourNote";
import backgroundImage from "../assets/backgroundImage.png";
import CompleteSignup from "../components/CompleteSignup";
import LangToggle from "../components/LangToggle";

const CompleteRegistration = () => {
  return (
    <div
      // className="h-screen w-full bg-cover bg-center"
      className="h-screen lg:h-screen lg:w-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute right-12 top-4">
        <LangToggle />
      </div>
      <div className=" justify-center pt-8  flex max-lg:flex-col max-lg:items-center lg:pt-36 lg:p-48 max-lg:p-10 shadow-xl">
        <YourNote />
        <CompleteSignup />
      </div>
    </div>
  );
};

export default CompleteRegistration;
