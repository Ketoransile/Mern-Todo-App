import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

const updateUserAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("User Information Updated Successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard");
};
export default updateUserAction;
