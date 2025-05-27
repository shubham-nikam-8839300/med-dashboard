import { FaCalendarAlt, FaChartBar, FaComments, FaHistory, FaHome, FaUserMd } from "react-icons/fa";

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "History", icon: <FaHistory /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Appointments", icon: <FaUserMd /> },
    { name: "Statistics", icon: <FaChartBar /> },
    { name: "Chat", icon: <FaComments /> },
    { name: "Support", icon: <FaComments /> },
  ];

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-6">
      <h1 className="text-xl font-bold text-blue-600 mb-6">Health<span className="text-gray-800">care.</span></h1>
      <ul className="space-y-4">
        {menu.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 cursor-pointer">
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
