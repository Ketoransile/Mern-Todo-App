import Header from "../components/Header";
import backgroundImage from "../assets/backgroundImage.png";
import FormRow from "../components/FormRow";
import { Form, useNavigation, useOutletContext } from "react-router-dom";
import { Translation, useTranslation } from "react-i18next";

const CurrentUser = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const { user } = useOutletContext();
  console.log("user from Dashboard context by using useOutletContext", user);
  console.log(user._id);
  return (
    <div
      className="h-[33vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Header />
      <div className="flex flex-col gap-3 justify-center items-center pt-24 ">
        {/* <div className="text-xl text-pink-600 dark:text-white font-bold text-center bg-white dark:bg-darkSlate py-3 px-2 w-96 lg:w-1/3 rounded-md shadow:xl"> */}
        <div className="text-xl text-lightPurple dark:text-white font-bold text-center bg-white dark:bg-darkSlate py-3 px-2 w-96 lg:w-1/3 rounded-md shadow:xl">
          {t("modifyText")}
        </div>
        <Form
          method="post"
          className="flex flex-col gap-4 bg-white dark:bg-darkSlate px-12 py-12 lg:py-6 w-96 lg:w-1/3 rounded-md shadow-xl "
        >
          <FormRow
            type="text"
            name="email"
            labelText={t("emailLabel")}
            defaultValue={user.email}
          />
          <FormRow
            type="password"
            name="password"
            labelText={t("passwordLabel")}
          />
          <FormRow
            type="text"
            name="username"
            labelText={t("usernameLabel")}
            defaultValue={user.username}
          />
          <FormRow
            type="tel"
            name="phone"
            labelText={t("phoneLabel")}
            defaultValue={user.phone}
          />
          <FormRow
            type="number"
            name="birthdayYear"
            labelText={t("birthdayYearLabel")}
            defaultValue={user.birthdayYear}
          />
          <button
            type="submit"
            // className="text-white font-bold text-xl bg-pink-500 hover:bg-pink-400 rounded-md py-3 px-2  w-96 lg:w-1/3"
            // className="text-white font-bold text-xl bg-pink-500 hover:bg-pink-400 rounded-md py-3 px-2  w-full lg:w-full"
            className="text-white font-bold text-xl bg-lightPurple hover:bg-pink-400 rounded-md py-3 px-2  w-full lg:w-full"
          >
            {isSubmitting ? t("savingModifyUser") : t("saveModifyUser")}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CurrentUser;
