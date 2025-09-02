import { useState } from "react";
import Card from "./Card.jsx";
import Modal from "./Modal";
import Tag from "./Tag";
import { references } from "../consts.js";
import ImageCard from "./ImageCard.jsx";

function References() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelect = (selectedJob) => {
    console.log({ selectedJob });
    setSelectedJob(selectedJob);
  };

  const handleClose = () => setSelectedJob(null);

  return (
    <section id="references" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Referencias</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            La arquitectura es una forma de plasmar los sueños en el mundo real
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-5 xl:gap-6 2xl:gap-8">
          {references.map((card) => (
            <ImageCard key={card.id} {...card} handleSelect={handleSelect} />
          ))}

          <Modal job={selectedJob} onClose={handleClose} />
        </div>
      </div>
    </section>
  );
}

export default References;
