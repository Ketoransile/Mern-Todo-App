import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";
import axios from "axios";

export const completeRegisterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(
  //   "datas that are gonna be submitted to the server are these:",
  //   data
  // );
  try {
    const { email, password, passwordConfirm, username, phone, birthdayYear } =
      data;
    const finalData = {
      email,
      password,
      passwordConfirm,
      username,
      phone,
      birthdayYear,
    };
    await customFetch.post("/auth/register", finalData);
    toast.success("Registration Complete");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return redirect("/register");
  }
};
