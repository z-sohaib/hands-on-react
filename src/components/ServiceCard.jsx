import { Link } from "react-router-dom";

function ServiceCard({ id, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border-green-500 border-2 flex flex-col justify-center items-center text-center">
      <h3 className="text-green-500 font-bold text-xl">{title}</h3>
      <p className="text-gray-800">{description}</p>
      <Link to={`/services/${id}`} className="text-green-500 font-bold mt-4">
        Read More
      </Link>
    </div>
  );
}

export default ServiceCard;
