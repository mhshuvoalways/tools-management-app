import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Items from "@/app/components/tool/Items";
import getTools from "@/lib/getTools";

const Tool = async () => {
  const tools = await getTools();

  return (
    <>
      <Header />
      <div className="mainWidht my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {tools.map((item) => (
          <Items key={item.id} item={item} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Tool;
