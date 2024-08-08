import Link from "next/link";

const index = () => {
  return (
    <div className="bg-primary py-20 absolute -bottom-60 left-0 right-0">
      <div className=" text-white flex justify-between gap-5 mainWidht flex-wrap">
        <p className="text-3xl font-bold">
          <Link href={"/"}>SINC</Link>
        </p>
      </div>
    </div>
  );
};

export default index;
