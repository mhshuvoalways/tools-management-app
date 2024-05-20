const DeliveryAddress = ({changeHandler }) => {
  return (
    <div className="w-full md:w-6/12">
      <p className="text-xl font-semibold">Delivery Details</p>
      <div className="space-y-5 mt-5">
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>Name</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="name"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full">
            <label>Email</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="email"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>Phone</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="phone"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full">
            <label>Country</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="country"
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-full">
            <label>City</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="city"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full">
            <label>Street Address</label>
            <input
              type="text"
              className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
              name="streetAddress"
              onChange={changeHandler}
            />
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
