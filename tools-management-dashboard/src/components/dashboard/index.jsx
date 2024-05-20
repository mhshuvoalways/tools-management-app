import { useSelector } from "react-redux";

const Dashboard = () => {
  const { categories } = useSelector((store) => store.category);
  const { tools } = useSelector((store) => store.tool);
  const { orders } = useSelector((store) => store.order);

  return (
    <div className="mainWidht mt-10">
      <p className="text-3xl font-medium">Hello Admin</p>
      <p className="text-xl mt-2">This is your status</p>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-xl">Available Categories</p>
          <p className="text-primary text-6xl font-semibold mt-2">
            {categories.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-xl">Available Tools</p>
          <p className="text-primary text-6xl font-semibold mt-2">
            {tools.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-xl">Order Tools</p>
          <p className="text-primary text-6xl font-semibold mt-2">
            {orders.length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-xl text-center shadow-sm">
          <p className="text-xl">Total Users</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
