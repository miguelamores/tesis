import { useState } from "react";
import Card from "./Card.jsx";
import Modal from "./Modal";
import Tag from "./Tag";
import { cardList } from "../consts.js";
import ImageCard from "./ImageCard.jsx";

function Main() {
  const [jobs, setJobs] = useState(cardList);
  const [selectedJob, setSelectedJob] = useState(null);
  const [filters, setFilters] = useState([]);

  const handleSelect = (selectedJob) => {
    setSelectedJob(selectedJob);
  };

  const handleClose = () => setSelectedJob(null);

  const handleFilters = (e) => {
    const { value: filter } = e.target;
    const selectedFilterIndex = filters.findIndex((f) => f === filter);
    const filtersCopy = [...filters];
    if (selectedFilterIndex < 0) {
      filtersCopy.push(filter);
    } else {
      filtersCopy.splice(selectedFilterIndex, 1);
    }
    setFilters(filtersCopy);
  };

  const filteredJobs =
    filters.length > 0
      ? jobs.filter((job) => job.tags.some((tag) => filters.includes(tag)))
      : jobs;

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 space-y-10">
        <div className="text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Experiencia</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Busca sobre mis trabajos y soluciones
          </p>
        </div>
        {/* <ImageCard /> */}
        <div className="text-white mx-auto text-center mb-2">Filter by:</div>
        <div className="max-w-3xl flex flex-wrap items-center justify-center gap-1 mx-auto">
          <Tag text="React" onChange={handleFilters} filters={filters} />
          <Tag text="Nextjs" onChange={handleFilters} filters={filters} />
          <Tag text="React Native" onChange={handleFilters} filters={filters} />
          <Tag text="Javascript" onChange={handleFilters} filters={filters} />
          <Tag text="Typescript" onChange={handleFilters} filters={filters} />
          <Tag text="Nodejs" onChange={handleFilters} filters={filters} />
          <Tag text="Testing" onChange={handleFilters} filters={filters} />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-5 xl:gap-6 2xl:gap-8">
          {filteredJobs.map((card) => (
            <ImageCard key={card.id} {...card} handleSelect={handleSelect} />
          ))}

          <Modal job={selectedJob} onClose={handleClose} />
        </div>
      </div>
    </section>
  );
}

export default Main;
