const DeliveryAddress = ({ changeHandler, deliverAddressError }) => {
  return (
    <div className="w-full md:w-6/12">
      <p className="text-xl font-semibold">Delivery Details</p>
      <div className="space-y-5 mt-5">
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>Name*</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="name"
              onChange={changeHandler}
            />
            <p className="text-red-600 font-medium mt-1">
              {deliverAddressError?.name}
            </p>
          </div>
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
        </div>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>Phone*</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="phone"
              onChange={changeHandler}
            />
            <p className="text-red-600 font-medium mt-1">
              {deliverAddressError?.phone}
            </p>
          </div>
          <div className="w-full">
            <label>Country*</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="country"
              onChange={changeHandler}
            />
            <p className="text-red-600 font-medium mt-1">
              {deliverAddressError?.country}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>City*</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="city"
              onChange={changeHandler}
            />
            <p className="text-red-600 font-medium mt-1">
              {deliverAddressError?.city}
            </p>
          </div>
          <div className="w-full">
            <label>Street Address*</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="streetAddress"
              onChange={changeHandler}
            />
            <p className="text-red-600 font-medium mt-1">
              {deliverAddressError?.streetAddress}
            </p>
          </div>
        </div>
        <div className="w-full">
          <label>Additional Information (optional)</label>
          <textarea
            className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2 h-28"
            name="additionalInformation"
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
