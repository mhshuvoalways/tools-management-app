import Link from "next/link";

const index = () => {
  return (
    <div className="bg-red-600 h-40 py-5 absolute -bottom-60 left-0 right-0">
      <div className=" text-white mainWidht">
        <p className="text-3xl font-bold">
          <Link href={"/"}>SINC</Link>
        </p>
      </div>
    </div>
  );
};

export default index;
