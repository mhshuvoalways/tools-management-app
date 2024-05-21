import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Tool from "@/app/components/tool/CategoryTools";

const ToolId = ({ params, searchParams }) => {
  const { name } = params;
  return (
    <>
      <Header />
      <Tool categoryName={name} search={searchParams.search} />
      <Footer />
    </>
  );
};

export default ToolId;
