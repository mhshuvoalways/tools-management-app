import getCategories from "@/lib/getCategories";
import Items from "./Items";

const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="mainWidht mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {categories.map((item) => (
        <Items key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
