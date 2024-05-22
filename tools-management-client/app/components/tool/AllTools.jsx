import getTools from "@/lib/getTools";
import Search from "../common/search";
import Items from "./Items";

const Tools = async ({ search }) => {
  const tools = await getTools();

  const newTools = search
    ? tools.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
    : tools;

  return (
    <div className="mt-10 mainWidht">
      <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-5">
        <p className="text-center font-semibold text-xl text-nowrap">
          All Tools
        </p>
        <div className="w-full sm:w-5/12">
          <Search />
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {newTools.length
          ? newTools?.map((item) => <Items key={item._id} item={item} />)
          : null}
      </div>
    </div>
  );
};

export default Tools;
