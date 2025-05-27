const CalendarPanel = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">May 2025</h3>
      <div className="grid grid-cols-7 text-center text-sm font-medium text-gray-600 mb-2">
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {[25, 26, 27, 28, 29, 30, 31].map((day, idx) => (
          <div key={idx} className="py-2 rounded-full bg-gray-100 hover:bg-blue-200 cursor-pointer">{day}</div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPanel;
