import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrders } from "../../store/actions/orderAction";

const Confirmation = () => {
  const [order, setOrder] = useState({
    status: "",
  });

  const dispatch = useDispatch();
  const { modal: isModalOpen, element } = useSelector((store) => store.modal);

  const changeHandler = (event) => {
    setOrder({
      status: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (isModalOpen && element) {
      dispatch(updateOrders(order, element._id));
    }
  };

  useEffect(() => {
    if (isModalOpen && element) {
      setOrder({ status: element.status });
    }
  }, [element, isModalOpen]);

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label>Status</label>
        <select
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
          onChange={changeHandler}
          value={order.status}
        >
          <option>Pending</option>
          <option>Cancelled</option>
          <option>Completed</option>
        </select>
      </div>
      <button className="btn w-full">Submit</button>
    </form>
  );
};

export default Confirmation;
