import ButtonAddCard from "@/app/components/common/button/ButtonAddCard";
import getSingleTool from "@/lib/getSingleTool";
import Image from "next/image";

const ToolDetails = async ({ slug }) => {
  const singleTool = await getSingleTool(slug);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-10 mt-20 mainWidht">
      <div className="w-full sm:w-8/12 md:w-96">
        <Image
          src={singleTool.image?.url}
          alt=""
          width={1000}
          height={1000}
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-5/12">
        <p className="text-2xl font-medium">{singleTool.name}</p>
        <p className="text-xl mt-2">${singleTool.price}</p>
        <p className="mt-5 mb-10">{singleTool.description}</p>
        <ButtonAddCard tool={singleTool} />
      </div>
    </div>
  );
};

export default ToolDetails;
