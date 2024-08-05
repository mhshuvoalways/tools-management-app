import { useSelector } from "react-redux";
import LoadinImg from "../../../../public/icons/loading.svg";

const Loading = () => {
  const loading = useSelector((store) => store.loading);

  return (
    loading && (
      <div className="fixed w-full h-screen flex items-center justify-center z-50">
        <p className="bg-black opacity-60 fixed inset-0"></p>
        <img src={LoadinImg} className="z-10" />
      </div>
    )
  );
};

export default Loading;
