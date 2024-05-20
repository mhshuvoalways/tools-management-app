import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tostify = () => {
  const tostify = useSelector((store) => store.tostify);

  useEffect(() => {
    if (tostify.type && tostify.messages) {
      Object.values(tostify.messages).forEach((msg) => {
        toast[tostify.type](msg, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
    }
  }, [tostify]);

  return <ToastContainer />;
};

export default Tostify;
