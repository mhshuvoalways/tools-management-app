const DeliveryAddress = ({ changeHandler, deliverAddressError }) => {
  return (
    <div className="w-full md:w-6/12">
      <p className="text-xl font-semibold">Delivery Details</p>
      <div className="space-y-5 mt-5">
        <div className="w-full">
          <label>Email*</label>
          <input
            type="text"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="email"
            onChange={changeHandler}
          />
          <p className="text-red-600 font-medium mt-1">
            {deliverAddressError?.email}
          </p>
        </div>
        <div className="w-full">
          <label>RC*</label>
          <input
            type="text"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="rc"
            onChange={changeHandler}
          />
          <p className="text-red-600 font-medium mt-1">
            {deliverAddressError?.rc}
          </p>
        </div>
        <div className="w-full">
          <label>Purpose*</label>
          <input
            type="text"
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
            name="purpose"
            onChange={changeHandler}
          />
          <p className="text-red-600 font-medium mt-1">
            {deliverAddressError?.purpose}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
