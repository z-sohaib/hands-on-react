import { useNavigate, useParams } from "react-router-dom";

function ServiceDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      name: "Service One",
      description: "Description for Service One",
    },
    {
      id: 2,
      name: "Service Two",
      description: "Description for Service Two",
    },
    {
      id: 3,
      name: "Service Three",
      description: "Description for Service Three",
    },
  ];

  const selectedService = services.find((s) => s.id === parseInt(params.id));
  return (
    <div className="flex flex-col text-center justify-center items-center">
      {selectedService ? (
        <>
          <h1 className="text-4xl font-bold">{selectedService.name}</h1>
          <p className="text-gray-800">{selectedService.description}</p>
        </>
      ) : (
        <p className="text-red-500">Service not found</p>
      )}
      <button
        to="/services"
        className="text-green-500 underline mt-4 cursor-pointer"
        onClick={() => navigate("/services")}>
        Back to Services
      </button>
    </div>
  );
}

export default ServiceDetails;
