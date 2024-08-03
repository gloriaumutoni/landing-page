import React, { useState, useEffect } from 'react';
import Featuredata from "./data";
import { nanoid } from "nanoid";

const Feature = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(Featuredata);
  }, []);

  let features = data.map((feature) => {
    <div key={nanoid()} className="flex-col">
      {feature.img}
      <p>{feature.title}</p>
      <p>{feature.paragraph}</p>
    </div>;
  });

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mt-6">FEATURES</h1>
      <div className="w-[80%] mx-auto flex">{features}</div>
    </div>
  );
};

export default Feature;




 
