import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../../store/actions/categoryAction";
import modalAction from "../../store/actions/modalAction";
import Confirmation from "../common/deleteConfirmation";
import Modal from "../common/modal";
import AddCategory from "./AddCategory";

const Index = () => {
  const [clicked, setClicked] = useState("");
  const category = useSelector((store) => store.category);
  const dispatch = useDispatch();
  
  return (
    <div className="mainWidht mt-10">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <p className="text-3xl font-medium">Category management</p>
        <button
          className="btn shadow-sm"
          onClick={() => {
            setClicked("addCategory");
            dispatch(modalAction(true));
          }}
        >
          Add +
        </button>
      </div>
      <div className="my-10 bg-white shadow-sm p-5 rounded-xl overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 rounded-l-xl">Name</th>
              <th className="p-3">Image</th>
              <th className="p-3 rounded-r-xl">Actions</th>
            </tr>
          </thead>
          <tbody>
            {category.categories.map((el, index) => (
              <tr
                className={`text-left rounded-b-xl ${
                  category.categories.length !== index + 1 &&
                  "border-b border-gray-100"
                }`}
                key={el._id}
              >
                <td className="p-3 text-lg">{el.name}</td>
                <td className="p-3">
                  <img src={el.image.url} className="w-20 h-14 rounded-xl object-cover" />
                </td>
                <td className="p-3 flex-inline">
                  <i
                    className="fa-solid fa-pen-to-square cursor-pointer text-lg"
                    onClick={() => {
                      setClicked("addCategory");
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
          <Confirmation
            deleteHandler={deleteCategory}
            description="Deleting this category will remove all associated tools!"
          />
        </Modal>
      ) : (
        <Modal>
          <AddCategory />
        </Modal>
      )}
    </div>
  );
};

export default Index;
