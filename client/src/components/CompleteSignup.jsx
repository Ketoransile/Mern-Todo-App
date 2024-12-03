import { Form, Link, useLocation, useNavigation } from "react-router-dom";
import FormRow from "./FormRow";

const CompleteSignup = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const location = useLocation();
  const { registerData } = location.state || {};
  return (
    <Form method="post" className="flex flex-col bg-white p-8 gap-3 w-80 ">
      <h1 className="text-3xl text-pink-600 text-center font-bold ">
        Complete Signup
      </h1>
      <input type="hidden" name="email" value={registerData?.email || ""} />
      <input
        type="hidden"
        name="password"
        value={registerData?.password || ""}
      />
      <input
        type="hidden"
        name="passwordConfirm"
        value={registerData?.passwordConfirm || ""}
      />
      <FormRow type="text" name="username" labelText="Username" />
      <FormRow type="tel" name="phone" labelText="Phone" />
      <FormRow type="number" name="birthdayYear" labelText="Birthday Year" />
      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-400 text-center text-white rounded-md  py-2 mt-6"
      >
        {isSubmitting ? `Submitting` : "Complete signup "}
        {/* Complete signup &rarr; */}
      </button>
      <Link
        to="/register"
        className="bg-slate-400 text-center text-white rounded-md  py-2"
      >
        Back &larr;
      </Link>
      <div className="flex items-center gap-4">
        <p className="text-center text-slate-500 ">Already have an account?</p>
        <Link to="/login" className="text-center text-pink-600">
          Login
        </Link>
      </div>
    </Form>
  );
};

export default CompleteSignup;
