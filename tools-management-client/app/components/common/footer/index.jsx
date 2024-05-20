import Link from "next/link";

const index = () => {
  return (
    <div className="bg-primary py-20 mt-20">
      <div className=" text-white flex justify-between gap-5 mainWidht flex-wrap">
        <p className="text-3xl font-bold">
          <Link href={"/"}>SINC</Link>
        </p>
        <div className="space-y-5">
          <p className="text-xl font-semibold">FOLLOW US</p>
          <div className="flex gap-2 items-center cursor-pointer">
            <i className="fa-brands fa-facebook"></i>
            <p>Facebook</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <i className="fa-brands fa-linkedin"></i>
            <p>LinkedIn</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <i className="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">SUBSCRIBE</p>
          <div className="mt-5">
            <p className="text-sm">Get E-mail updates about our latest shop and special offers.</p>
            <div>
              <label>Email</label>
              <input
                type="text"
                className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2 text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
