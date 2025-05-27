import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm rounded-md">
      <input
        type="text"
        placeholder="Search"
        className="border px-4 py-2 rounded-lg w-1/3"
      />
      <div className="flex items-center space-x-4">
        <img
          src={user}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">+</button>
      </div>
    </div>
  );
};

export default Navbar;
