import ServiceCard from "./ServiceCard";

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

function Services() {
  //   function addArray(arr) {
  //     arr.map((element) => element + 1); // [1, 2, 3, 4] ====> [2, 3, 4, 5]
  //   }
  return (
    <div>
      <h2>Our Services</h2>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          title={service.name}
          description={service.description}
        />
      ))}
    </div>
  );
}

export default Services;
