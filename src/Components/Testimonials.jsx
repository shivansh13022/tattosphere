import React from "react";
import dummyImage from "../Images/dummy.png"; // Ensure you have a placeholder image in your project

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Company",
    testimonial:
      "This service transformed our business. Highly recommend to anyone looking to make a real impact.",
    image: dummyImage,
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director",
    testimonial:
      "A truly exceptional experience from start to finish. Their attention to detail is unmatched.",
    image: dummyImage,
  },
  {
    id: 3,
    name: "Ethan Hunt",
    position: "Freelance Developer",
    testimonial:
      "Incredible results, professional staff, and seamless process. Couldn't ask for more.",
    image: dummyImage,
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black flex flex-col items-center">
      <h1 className="font-bold text-6xl text-center p-9 text-slate-500">
        WHAT OUR{" "}
        <strong className="font-bold" style={{ color: "#C4A75C" }}>
          CLIENTS
        </strong>{" "}
        SAY
      </h1>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-gray-800 rounded-xl shadow-xl p-6 w-96 text-white"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-C4A75C"
            />
            <h3 className="text-xl text-C4A75C text-center font-semibold mt-4">
              {testimonial.name}
            </h3>
            <p className="text-sm text-center text-gray-400">
              {testimonial.position}
            </p>
            <p className="text-md mt-4 text-center text-gray-300">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
