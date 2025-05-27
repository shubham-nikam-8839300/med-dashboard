import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HumanFigure from "../components/HumanFigure";
import StatusCard from "../components/StatusCard";
import CalendarPanel from "../components/CalendarPanel";
import AppointmentCard from "../components/AppointmentCard";
import ActivityChart from "../components/ActivityChart";

import doc1 from "../assets/female-doct.jpg";
import doc2 from "../assets/male-doct.png";
import doc3 from "../assets/neurologist.png";
import doc4 from "../assets/heart.png";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-[250px]">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 bg-[#f4f6fa] p-4 md:p-6">
        <Navbar />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Left (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <HumanFigure />

            {/* Status Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <StatusCard title="🫁 Lungs" date="26 May 2025" progressColor="bg-red-400" />
              <StatusCard title="🦷 Teeth" date="26 May 2025" progressColor="bg-green-400" />
              <StatusCard title="🦴 Bone" date="26 May 2025" progressColor="bg-orange-400" />
            </div>

            <ActivityChart />
          </div>

          {/* Right Panel */}
          <div className="space-y-4">
            <CalendarPanel />

            <AppointmentCard
              title="Dentist"
              time="09:00 - 11:00"
              doctor="Dr. Cameron Williamson"
              icon="🦷"
              image={doc1}
            />
            <AppointmentCard
              title="Physiotherapy"
              time="11:00 - 12:00"
              doctor="Dr. Kevin Djones"
              icon="💪"
              image={doc2}
            />
            <AppointmentCard
              title="Cardiologist"
              time="12:00 AM"
              doctor="Dr. Steve Heart"
              icon="❤️"
              image={doc3}
            />
            <AppointmentCard
              title="Neurologist"
              time="16:00 PM"
              doctor="Dr. Lisa Brain"
              icon="🧠"
              image={doc4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
