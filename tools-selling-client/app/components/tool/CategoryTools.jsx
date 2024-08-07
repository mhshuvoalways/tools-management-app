import getCategoryTools from "@/lib/getCategoryTools";
import getSingleCategory from "@/lib/getSingleCategory";
import Image from "next/image";
import Search from "../common/search";
import Items from "./Items";

const Tools = async ({ categoryName, search }) => {
  const category = await getSingleCategory(categoryName);
  const tools = await getCategoryTools(category?._id);

  const newTools = search
    ? tools.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    : tools;

  return (
    <div className="mt-20 mainWidht">
      <div className="flex justify-between flex-wrap sm:flex-nowrap gap-5">
        <div className="flex items-center gap-5 bg-white p-4 rounded-xl shadow justify-center">
          <Image
            src={category?.image.url}
            alt=""
            className="w-32 h-20 object-cover rounded-xl"
            width={150}
            height={150}
          />
          <p className="text-center font-semibold text-xl text-nowrap">
            {category?.name}
          </p>
        </div>
        <div className="w-full sm:w-5/12">
          <Search />
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {newTools.length
          ? newTools?.map((item) => <Items key={item.id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default Tools;
