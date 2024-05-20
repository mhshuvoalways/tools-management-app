import { useSelector } from "react-redux";

const Loading = () => {
  const loading = useSelector((store) => store.loading);

  return (
    loading && (
      <div className="fixed w-full h-screen flex items-center justify-center z-50">
        <p className="bg-black opacity-60 fixed inset-0"></p>
        <img src="/public/icons/loading.svg" className="z-10" />
      </div>
    )
  );
};

export default Loading;
