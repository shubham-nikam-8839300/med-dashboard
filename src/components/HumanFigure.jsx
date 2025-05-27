import humanBody from "../assets/human-body-frontal.png";


const HumanFigure = () => {
  return (
    <div className="relative bg-white rounded-lg shadow p-4 flex justify-center">
      <img src={humanBody} alt="Human Body" className="h-80" />
      <div className="absolute top-10 right-10 bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs">❤️ Healthy Heart</div>
      <div className="absolute bottom-10 left-10 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">🦵 Healthy Leg</div>
    </div>
  );
};

export default HumanFigure;
