const StatusCard = ({ title, date, progressColor }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-xs text-gray-500">Date: {date}</p>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <div className={`h-2 rounded-full ${progressColor} w-3/4`}></div>
      </div>
    </div>
  );
};

export default StatusCard;
