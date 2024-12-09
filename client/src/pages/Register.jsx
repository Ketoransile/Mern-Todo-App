import backgroundImage from "../assets/backgroundImage.png";
import LangToggle from "../components/LangToggle";
import Signup from "../components/Signup";
import YourNote from "../components/YourNote";
const Register = () => {
  return (
    <div
      className="max-lg:h-screen lg:w-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute right-12 top-4">
        <LangToggle />
      </div>
      <div className=" justify-center pt-8  flex max-lg:flex-col max-lg:items-center lg:pt-36 lg:p-48 max-lg:p-10 shadow-xl">
        <YourNote />
        <Signup />
      </div>
    </div>
  );
};

export default Register;
