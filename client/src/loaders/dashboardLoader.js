import customFetch from "../utils/customFetch";

const dashboardLoader = async () => {
  const loadedData = await customFetch.get("/users/current-user");
  const data = loadedData.data;
  return data;
};
export default dashboardLoader;
