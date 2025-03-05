import React from "react";

const Portfolio = () => {
  const projects = [
    { name: "Project AIOS", description: "An LLM-based OS." },
    { name: "Portfolio Website", description: "This website showcasing my skills." },
  ];

  return (
    <section id="portfolio" className="container my-5">
      <h2 className="mb-4">Portfolio</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
