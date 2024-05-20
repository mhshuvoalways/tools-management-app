const Tools = ({ orderTools, totalPrice, onSubmit }) => {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12">
      <p className="text-xl font-semibold">Your order</p>
      <div className="mt-12 bg-gray-100 p-10 rounded-xl">
        <div className="flex items-center justify-between font-medium text-lg mb-2">
          <p>Products</p>
          <p>Price</p>
        </div>
        <div className="border-y py-5 text-sm space-y-2">
          {orderTools?.map((item, index) => (
            <div className="flex justify-between" key={item._id}>
              <p>
                {index + 1}. {item.name}
              </p>
              <p>${item.price}</p>
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
