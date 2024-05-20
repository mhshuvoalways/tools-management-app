import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Tool from "@/app/components/tool";

const ToolId = ({ params }) => {
  const { name } = params;
  
  return (
    <>
      <Header />
      <Tool categoryName={name} />
      <Footer />
    </>
  );
};

export default ToolId;
