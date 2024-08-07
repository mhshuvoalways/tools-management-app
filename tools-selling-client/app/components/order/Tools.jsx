import { MyContext } from "@/app/context";
import { useContext } from "react";

const Tools = ({ orderTools, totalPrice, onSubmit }) => {
  const { bookHandler } = useContext(MyContext);

  return (
    <div className="w-full md:w-6/12 lg:w-4/12">
      <p className="text-xl font-semibold">Your order</p>
      <div className="mt-12 bg-gray-100 p-10 rounded-xl">
        <div className="flex items-center justify-between font-medium text-lg mb-2">
          <p>Products</p>
          <p>Price</p>
        </div>
        <div className="border-y py-5 text-sm space-y-5">
          {orderTools?.map((item, index) => (
            <div key={item._id}>
              <div className="flex items-start justify-between gap-2">
                <p className="text-lg">
                  {index + 1}. {item.name}
                </p>
                <div className="flex gap-5 items-start">
                  <p>${item.price}</p>
                  <p
                    className="fa-solid fa-trash cursor-pointer text-lg text-red-400"
                    onClick={() => bookHandler(item)}
                  ></p>
                </div>
              </div>
              <p className="text-sm opacity-80">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mt-2 font-medium text-lg">
          <p>Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
      <button className="btn mt-12 w-full" onClick={onSubmit}>
        PLACE ORDER
      </button>
    </div>
  );
};

export default Tools;
