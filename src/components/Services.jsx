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
      <h2 className="text-center text-3xl py-4 font-bold">Our Services</h2>
      <div className="flex gap-x-4 justify-center items-center">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
          />
        ))}
      </div>

      {/* <ServiceCard
        title="Service One"
        description="Description for Service One"
      />
      <ServiceCard
        title="Service Two"
        description="Description for Service Two"
      />
      <ServiceCard
        title="Service Three"
        description="Description for Service Three"
      /> */}
    </div>
  );
}

export default Services;
