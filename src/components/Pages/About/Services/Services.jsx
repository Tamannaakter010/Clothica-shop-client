
import React, { useEffect, useState } from "react";

const servicesData = [
  { id: 1, label: "Business Year", value: 35 },
  { id: 2, label: "Design Brands", value: 40 },
  { id: 3, label: "Team Members", value: 180 },
];

const Counter = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}+</span>;
};

const Services = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-gray-600 mb-6">Provide perfect and practical services</p>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          Lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
          nibh id elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                <Counter end={service.value} />
              </h3>
              <p className="text-gray-700">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
