import { Form, Link, useNavigation } from "react-router-dom";
import FormRow from "./FormRow";
import { useTranslation } from "react-i18next";

const Signin = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className="flex flex-col bg-white p-8 gap-3 w-80 ">
      {/* <h1 className="text-3xl text-pink-600 text-center font-bold mb-4"> */}
      <h1 className="text-3xl text-lightPurple text-center font-bold mb-4">
        {t("login")}
      </h1>
      <FormRow
        type="text"
        name="email"
        labelText={t("emailLabel")}
        isAuthForm
      />
      <FormRow
        type="password"
        name="password"
        labelText={t("passwordLabel")}
        isAuthForm
      />

      <button
        type="submit"
        // className="bg-pink-500 hover:bg-pink-400 text-center text-white rounded-md  py-2 my-4"
        className="bg-lightPurple hover:bg-pink-400 text-center text-white rounded-md  py-2 my-4"
      >
        {isSubmitting ? t("submitting") : t("login")}
      </button>
      <p className="text-center text-slate-500 pt-3">{t("dontHaveAccount")}</p>
      {/* <Link to="/register" className="text-center text-pink-600 font-bold"> */}
      <Link to="/register" className="text-center text-lightPurple font-bold">
        {t("signup")}
      </Link>
    </Form>
  );
};

export default Signin;
