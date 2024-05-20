import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertAction from "../../store/actions/alertAction";
import {
  addCategory,
  updateCategory,
} from "../../store/actions/categoryAction";

const AddCategory = () => {
  const [category, setCategory] = useState({
    name: "",
    image: null,
    imageUrl: null,
  });

  const dispatch = useDispatch();
  const { modal: isModalOpen, element } = useSelector((store) => store.modal);
  const { categories } = useSelector((store) => store.category);

  const changeHandlerImage = (event) => {
    setCategory({
      ...category,
      image: event.target.files[0],
    });
  };

  const changeHandler = (event) => {
    setCategory({
      ...category,
      name: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const findCategory = categories.find(
      (el) => el.url === category.name.toLowerCase().split(" ").join("-")
    );
    if (!findCategory) {
      const formData = new FormData();
      if (category.image) {
        formData.append("image", category.image);
      }
      if (category.imageUrl) {
        formData.append("imageUrl", category.imageUrl);
      }
      formData.append("name", category.name);
      if (isModalOpen && element) {
        const {
          _id,
          image: { public_id },
        } = element;
        dispatch(updateCategory(formData, _id, public_id));
      } else {
        dispatch(addCategory(formData));
      }
    } else {
      dispatch(alertAction({ message: "Category already exist!" }, "error"));
    }
  };

  useEffect(() => {
    if (isModalOpen && element) {
      const {
        name,
        image: { url: imageUrl },
      } = element;
      setCategory({ name, image: null, imageUrl });
    }
  }, [element, isModalOpen]);

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label>Category Name</label>
        <input
          type="text"
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
          onChange={changeHandler}
          value={category.name}
        />
      </div>
      <div>
        {category.image || category.imageUrl ? (
          <div className="flex gap-1">
            <img
              alt="not found"
              className="rounded-xl border-dotted border-primary border-2"
              src={
                category.image
                  ? URL.createObjectURL(category.image)
                  : category.imageUrl
              }
            />
            <div>
              <i
                className="fa-solid fa-xmark cursor-pointer w-7 h-7 flex justify-center items-center border rounded-full"
                onClick={() =>
                  setCategory({
                    ...category,
                    image: null,
                    imageUrl: null,
                  })
                }
              ></i>
            </div>
          </div>
        ) : (
          <label>
            Upload an Image
            <p className="w-full p-3 h-32 bg-gray-100 rounded-xl cursor-pointer border-dotted border-primary border-2 mt-2"></p>
            <input
              type="file"
              onChange={changeHandlerImage}
              className="hidden"
              accept=".png, .jpg, .jpeg"
            />
          </label>
        )}
      </div>
      <button className="btn w-full">Submit</button>
    </form>
  );
};

export default AddCategory;
