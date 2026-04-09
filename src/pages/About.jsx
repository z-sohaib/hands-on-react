import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-4xl">About Us Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, ipsum
        dolorem autem excepturi nihil facilis rerum repudiandae animi illo sequi
        perferendis fuga velit enim dolore. Quaerat tenetur alias, veniam nemo
        eos consequatur suscipit non deleniti illo minus eius dolorem hic autem
        dolores! Quos, fugiat. Optio odit in porro ratione autem!
      </p>
      <p>Current path: {location.pathname}</p>
    </div>
  );
}

export default About;
