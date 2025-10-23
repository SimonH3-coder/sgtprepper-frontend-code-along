import { getList } from "../models/categoryModel.js";

export const getGategoryList = async () => {
  const data = await getList();

  console.log(data);

  const formattedCategories = data.map((item) => ({
    slug: item.slug,
    title: item.title,
    url: `/index.htm#/producter?category=${item.slug}`,
  }));

  console.log(formattedCategories);
  return formattedCategories;
};
