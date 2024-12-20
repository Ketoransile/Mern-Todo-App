import { Form, Link, useLocation, useNavigation } from "react-router-dom";
import FormRow from "./FormRow";
import { useTranslation } from "react-i18next";

const CompleteSignup = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const location = useLocation();
  const { registerData } = location.state || {};
  return (
    <Form method="post" className="flex flex-col bg-white p-8 gap-3 w-80 ">
      {/* <h1 className="text-3xl text-pink-600 text-center font-bold "> */}
      <h1 className="text-3xl text-lightPurple text-center font-bold ">
        {t("completeSignup")}
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
      <FormRow
        type="text"
        name="username"
        labelText={t("usernameLabel")}
        isAuthForm
      />
      <FormRow type="tel" name="phone" labelText={t("phoneLabel")} isAuthForm />
      <FormRow
        type="number"
        name="birthdayYear"
        labelText={t("birthdayYearLabel")}
        isAuthForm
      />
      <button
        type="submit"
        // className="bg-pink-500 hover:bg-pink-400 text-center text-white rounded-md  py-2 mt-6"
        className="bg-lightPurple hover:bg-pink-400 text-center text-white rounded-md  py-2 mt-6"
      >
        {isSubmitting ? t("submitting") : t("completeSignup")}
        {/* Complete signup &rarr; */}
      </button>
      <Link
        to="/register"
        className="bg-slate-400 text-center text-white rounded-md  py-2"
      >
        {t("back")} &larr;
      </Link>
      <div className="flex items-center gap-4">
        <p className="text-center text-slate-500 ">{t("alreadyHaveAccount")}</p>
        {/* <Link to="/login" className="text-center text-pink-600"> */}
        <Link to="/login" className="text-center text-lightPurple">
          {t("login")}
        </Link>
      </div>
    </Form>
  );
};

export default CompleteSignup;
