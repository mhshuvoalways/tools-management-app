import getCategories from "@/lib/getCategories";
import Items from "./Items";

const Categories = async ({ search }) => {
  const categories = await getCategories();

  const newCateogories = search
    ? categories.filter((el) =>
        el.name.toLowerCase().includes(search.toLowerCase())
      )
    : categories;

  return (
    <div className="mainWidht mt-10 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-5">
      {newCateogories.map((item) => (
        <Items key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
