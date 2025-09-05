import { useState } from "react";
import Card from "./Card.jsx";
import Modal from "./Modal";
import Tag from "./Tag";
import { prototypes } from "../consts.js";
import ImageCard from "./ImageCard.jsx";

function Prototype() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleSelect = (selectedJob) => {
    setSelectedJob(selectedJob);
  };

  const handleClose = () => setSelectedJob(null);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Prototipado</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            PROTOTIPADO FÍSICO PARA LA TOMA DE DECISIONES ARQUITECTÓNICAS
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-5 xl:gap-6 2xl:gap-8">
          {prototypes.map((card) => (
            <ImageCard key={card.id} {...card} handleSelect={handleSelect} />
          ))}

          <Modal job={selectedJob} onClose={handleClose} />
        </div>
      </div>
    </section>
  );
}

export default Prototype;
