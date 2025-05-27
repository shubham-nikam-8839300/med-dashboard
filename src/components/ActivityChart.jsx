const ActivityChart = () => {
  const data = [40, 60, 30, 80, 70, 50, 90];

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <h3 className="mb-3 text-lg font-semibold text-gray-700">📊 Activity</h3>
      <div className="flex items-end justify-between h-40 sm:h-48 md:h-56 space-x-3 relative">
        {data.map((height, idx) => (
          <div key={idx} className="flex flex-col items-center w-4 sm:w-5 md:w-6">
            {/* Value on top */}
            <span className="text-xs mb-1 text-gray-600 font-medium">{height}</span>
            
            {/* Graph Bar */}
            <div
              className="w-full bg-blue-500 rounded-t-md transition-all duration-300 hover:bg-blue-600"
              style={{ height: `${height}px` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityChart;
