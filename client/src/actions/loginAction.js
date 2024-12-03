import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log("Datas to be sbmitted for login:", data);
    await customFetch.post("/auth/login", data);
    toast.success("Logged in successfully");
    return redirect("/dashboard");
  } catch (error) {
    console.log("error from login action", error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
