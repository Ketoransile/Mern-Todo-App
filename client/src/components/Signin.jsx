import { Form, Link, useNavigation } from "react-router-dom";
import FormRow from "./FormRow";

const Signin = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className="flex flex-col bg-white p-8 gap-3 w-80 ">
      <h1 className="text-3xl text-pink-600 text-center font-bold mb-4">
        Login
      </h1>
      <FormRow type="text" name="email" labelText="Email" />
      <FormRow type="password" name="password" labelText="Password" />

      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-400 text-center text-white rounded-md  py-2 my-4"
      >
        {isSubmitting ? "Submitting" : "Login"}
      </button>
      <p className="text-center text-slate-500 pt-3">
        Don&apos;t have an account?
      </p>
      <Link to="/register" className="text-center text-pink-600 font-bold">
        Signup
      </Link>
    </Form>
  );
};

export default Signin;
