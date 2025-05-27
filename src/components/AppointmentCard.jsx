const AppointmentCard = ({ title, time, doctor, icon, image }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow space-x-4">
      <img src={image} alt={title} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <div className="text-sm font-semibold">{title} {icon}</div>
        <div className="text-xs text-gray-500">{time}</div>
        <div className="text-xs">{doctor}</div>
      </div>
    </div>
  );
};

export default AppointmentCard;
