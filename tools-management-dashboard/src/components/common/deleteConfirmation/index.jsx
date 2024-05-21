import { useDispatch, useSelector } from "react-redux";
import modalAction from "../../../store/actions/modalAction";

const Index = ({ deleteHandler, description }) => {
  const dispatch = useDispatch();
  const { element } = useSelector((store) => store.modal);

  return (
    <div className="text-center">
      <p className="text-2xl">Are you sure you want to delete?</p>
      <p className="mt-2 opacity-70">{description}</p>
      <div className="flex justify-between items-center gap-2 mt-20">
        <button className="btn" onClick={() => dispatch(modalAction(false))}>
          No
        </button>
        <button
          className="btn"
          onClick={() =>
            dispatch(deleteHandler(element._id, element?.image?.public_id))
          }
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default Index;
