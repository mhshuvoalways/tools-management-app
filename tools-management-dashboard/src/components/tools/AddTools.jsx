import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alertAction from "../../store/actions/alertAction";
import { addTool, updateTool } from "../../store/actions/toolAction";

const AddTool = () => {
  const [tool, setTool] = useState({
    category: {
      _id: "",
      name: "",
    },
    name: "",
    description: "",
    price: "",
    image: null,
    imageUrl: null,
  });

  const dispatch = useDispatch();
  const { modal: isModalOpen, element } = useSelector((store) => store.modal);
  const { categories } = useSelector((store) => store.category);
  const { tools } = useSelector((store) => store.tool);

  const changeHandlerImage = (event) => {
    setTool({
      ...tool,
      image: event.target.files[0],
    });
  };

  const changeHandler = (event) => {
    setTool({
      ...tool,
      [event.target.name]: event.target.value,
    });
  };

  const categoryHandler = (event) => {
    const selectedCategory = categories.find(
      (cat) => cat._id === event.target.value
    );
    setTool({
      ...tool,
      category: selectedCategory,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const findtool = tools.find(
      (el) => el.url === tool.name.toLowerCase().split(" ").join("-")
    );
    if (!findtool) {
      const formData = new FormData();
      if (tool.image) {
        formData.append("image", tool.image);
      }
      if (tool.imageUrl) {
        formData.append("imageUrl", tool.imageUrl);
      }
      formData.append("name", tool.name);
      formData.append("categoryId", tool.category._id);
      formData.append("description", tool.description);
      formData.append("price", tool.price);
      if (isModalOpen && element) {
        const {
          _id,
          image: { public_id },
        } = element;
        dispatch(updateTool(formData, _id, public_id));
      } else {
        dispatch(addTool(formData));
      }
    } else {
      dispatch(alertAction({ message: "Tool already exist!" }, "error"));
    }
  };

  useEffect(() => {
    if (isModalOpen && element) {
      const {
        name,
        description,
        price,
        category,
        image: { url: imageUrl },
      } = element;
      setTool({ name, description, price, category, image: null, imageUrl });
    }
  }, [element, isModalOpen]);

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label>Category*</label>
        <select
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
          onChange={categoryHandler}
          value={tool.category._id}
        >
          <option disabled value=""></option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Name*</label>
        <input
          type="text"
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
          name="name"
          onChange={changeHandler}
          value={tool.name}
        />
      </div>
      <div>
        <label>Description*</label>
        <textarea
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2 h-20"
          name="description"
          onChange={changeHandler}
          value={tool.description}
        />
      </div>
      <div>
        <label>Price*</label>
        <input
          type="number"
          className="w-full p-3 outline-0 bg-gray-100 rounded-xl mt-2"
          name="price"
          onChange={changeHandler}
          value={tool.price}
        />
      </div>
      <div>
        {tool.image || tool.imageUrl ? (
          <div className="flex gap-1">
            <img
              alt="not found"
              className="rounded-xl border-dotted border-primary border-2"
              src={tool.image ? URL.createObjectURL(tool.image) : tool.imageUrl}
            />
            <div>
              <i
                className="fa-solid fa-xmark cursor-pointer w-7 h-7 flex justify-center items-center border rounded-full"
                onClick={() =>
                  setTool({
                    ...tool,
                    image: null,
                    imageUrl: null,
                  })
                }
              ></i>
            </div>
          </div>
        ) : (
          <label>
            Upload an Image*
            <p className="w-full p-3 h-32 bg-gray-100 rounded-xl cursor-pointer border-dotted border-primary border-2 mt-2"></p>
            <input
              type="file"
              onChange={changeHandlerImage}
              className="hidden"
              accept=".png, .jpg, .jpeg, .gif .webp"
            />
          </label>
        )}
      </div>
      <button className="btn w-full">Submit</button>
    </form>
  );
};

export default AddTool;
