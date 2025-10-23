import { getList } from "../models/categoryModel.js";

export const getGategoryList = async () => {
  const data = await getList();
  console.log(data);
  return data;
};
