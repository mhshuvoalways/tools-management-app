import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import ToolDetails from "@/app/components/tool/ToolDetails";

const Tool = ({ params }) => {
  const { slug } = params;

  return (
    <>
      <Header />
      <ToolDetails slug={slug} />
      <Footer />
    </>
  );
};

export default Tool;
