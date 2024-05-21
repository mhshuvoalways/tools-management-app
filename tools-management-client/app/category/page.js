import Categories from "@/app/components/category";
import Footer from "@/app/components/common/footer";
import Header from "@/app/components/common/header";
import Search from "@/app/components/common/search";
import Hero from "@/app/components/hero";

const Category = ({ searchParams }) => {
  return (
    <>
      <Header />
      <Hero />
      <Search className="mt-20 sm:w-6/12 mainWidht" />
      <Categories search={searchParams.search} />
      <Footer />
    </>
  );
};

export default Category;
