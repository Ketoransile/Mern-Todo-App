import notFound from "../assets/notFound.svg";
const Error = () => {
  return (
    <img
      src={notFound}
      alt="notFoundImage"
      className="bg-center bg-cover h-screen w-screen"
    />
  );
};

export default Error;
