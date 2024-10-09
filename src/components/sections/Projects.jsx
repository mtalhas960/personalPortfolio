import React, { useState } from "react";
import ProjectsCard from "./utils/ProjectsCard";
import { projectsData } from "../../data/projects-data";

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleShowMore = () => {
    if (visibleCount >= projectsData.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount(visibleCount + 2);
    }
  };

  const visibleProjects = projectsData.slice(0, visibleCount);

  return (
    <section className="Projects">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center mx-auto text-center heading-with-lines">
          <h5>My Projects</h5>
        </div>
        <div className="row gy-4 mt-lg-5 mt-4">
          {visibleProjects.map((project) => (
            <div className="col-lg-6" key={project.id}>
              <ProjectsCard
                imageSrc={project.image}
                title={project.name}
                description={project.description}
                link={project.demo}
                skills={project.skills}
                duration={project.duration}
                associated={project.associated}
                associatedLink={project.associatedLink}
              />
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center mt-lg-5 mt-4">
          {projectsData.length > 4 &&
            <button className="hover1" onClick={handleShowMore}>
              {visibleCount >= projectsData.length ? "Show Less" : "Show More"}
            </button>
          }
        </div>
      </div>
    </section>
  );
};

export default Projects;