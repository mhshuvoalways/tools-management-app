import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import modalAction from "../../store/actions/modalAction";
import { deleteOrder } from "../../store/actions/orderAction";
import DeleteConfirmation from "../common/deleteConfirmation";
import Modal from "../common/modal";
import Confirmation from "./Confirmation";

const Index = () => {
  const [clicked, setClicked] = useState("");
  const { orders } = useSelector((store) => store.order);
  const dispatch = useDispatch();

  return (
    <div className="mainWidht mt-10">
      <p className="text-3xl font-medium">Order management</p>
      <div className="my-10 bg-white shadow-sm p-5 rounded-xl overflow-x-auto">
        <table className="min-w-[900px] sm:w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3">User</th>
              <th className="p-3">Delivery Address</th>
              <th className="p-3">Tools</th>
              <th className="p-3">Order Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 rounded-r-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((el, index) => (
              <tr
                className={`text-left rounded-b-xl ${
                  orders.length !== index + 1 && "border-b border-gray-100"
                }`}
                key={el._id}
              >
                <td className="p-3 align-top">
                  <p className="text-lg">{el.user.name}</p>
                  <p className="text-sm">{el.user.email}</p>
                </td>
                <td className="p-3 align-top">
                  <p className="text-sm">
                    <strong>Email:</strong> {el.orderAddress.email}
                  </p>
                  <p className="text-sm">
                    <strong>RC:</strong> {el.orderAddress.rc}
                  </p>
                  <p className="text-sm">
                    <strong>Purpose:</strong> {el.orderAddress.purpose}
                  </p>
                </td>
                <td className="px-3 w-80 sm:w-3/12 align-top">
                  {el.tools.map((tool, index) => (
                    <div
                      key={tool._id}
                      className={`py-3 ${
                        el.tools?.length !== index + 1 &&
                        "border-b border-gray-100"
                      }`}
                    >
                      <img
                        src={tool.image.url}
                        className="w-20 h-14 rounded-xl object-cover"
                      />
                      <div className="mt-1">
                        <p>
                          <strong>Tool:</strong> {tool.name}
                        </p>
                        <p>
                          <strong>Category: </strong>
                          {tool.category.name}
                        </p>
                        <p>
                          <strong>Price: $</strong>
                          {tool.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </td>
                <td className={`p-3 text-lg align-top`}>
                  <p>{moment(el.createdAt).format("LL")}</p>
                </td>
                <td className={`p-3 text-lg text-primary align-top`}>
                  {el.status}
                </td>
                <td className="p-3 flex-inline align-top">
                  <i
                    className="fa-solid fa-pen-to-square cursor-pointer text-lg"
                    onClick={() => {
                      setClicked("");
                      dispatch(modalAction(true, el));
                    }}
                  ></i>
                  <i
                    className="fa-solid fa-trash cursor-pointer text-lg ml-5"
                    onClick={() => {
                      setClicked("confirmation");
                      dispatch(modalAction(true, el));
                    }}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {clicked === "confirmation" ? (
        <Modal>
          <DeleteConfirmation deleteHandler={deleteOrder} />
        </Modal>
      ) : (
        <Modal>
          <Confirmation />
        </Modal>
      )}
    </div>
  );
};

export default Index;
