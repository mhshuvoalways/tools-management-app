import { useDispatch, useSelector } from "react-redux";
import modalAction from "../../../store/actions/modalAction";

const Modal = ({ children }) => {
  const modal = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  return (
    modal.modal && (
      <div>
        <div className="fixed mainWidht inset-0 z-40 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg w-full lg:w-5/12 max-h-[90vh] overflow-y-auto relative modal">
            <p
              onClick={() => dispatch(modalAction(false))}
              className="cursor-pointer text-end p-5 font-bold text-lg absolute right-0"
            >
              ✕
            </p>
            <div className="px-5 md:px-10 my-10">{children}</div>
          </div>
        </div>
        <p className="fixed inset-0 bg-gray-700 opacity-50 z-30"></p>
      </div>
    )
  );
};

export default Modal;
