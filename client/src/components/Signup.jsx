import { Form, Link, useNavigate } from "react-router-dom";
import FormRow from "./FormRow";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    navigate("/complete-registration", { state: { registerData: data } });
  };

  return (
    <Form
      method="post"
      onSubmit={handleSubmit}
      className="flex flex-col bg-white p-8 gap-3 w-80 "
    >
      {/* <h1 className="text-4xl text-pink-600 text-center font-bold   "> */}
      <h1 className="text-4xl text-lightPurple text-center font-bold   ">
        Signup
      </h1>
      <FormRow type="text" name="email" labelText="Email" isAuthForm />
      <FormRow
        type="password"
        name="password"
        labelText="Password"
        isAuthForm
      />
      <FormRow
        type="password"
        name="passwordConfirm"
        labelText="Confirm Password"
        isAuthForm
      />
      <button
        type="submit"
        to="/complete-registration"
        // className="bg-pink-500 hover:bg-pink-400 text-center text-white rounded-md  py-2 mt-6"
        className="bg-lightPurple hover:bg-pink-400 text-center text-white rounded-md  py-2 mt-6"
      >
        Complete signup &rarr;
      </button>
      <p className="text-center text-slate-500 pt-3">
        Already have an account?
      </p>
      {/* <Link to="/login" className="text-center text-pink-600 font-bold"> */}
      <Link to="/login" className="text-center text-lightPurple font-bold">
        Login
      </Link>
    </Form>
  );
};

export default Signup;
