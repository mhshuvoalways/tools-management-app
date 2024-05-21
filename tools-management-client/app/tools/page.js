import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Tool from "@/app/components/tool/AllTools";

const AllTools = ({ searchParams }) => {
  return (
    <>
      <Header />
      <Tool search={searchParams.search} />
      <Footer />
    </>
  );
};

export default AllTools;
