import React from "react";

const ProjectsCard = ({ imageSrc, title, description, link, skills, duration, associated, associatedLink }) => {
  return (
    <div className="position-relative rounded bg-gradient-to-r h-100">
      <div className="d-flex flex-row gap-2 p-lf-4 p-3">
        <div className="rounded-circle bg-danger"></div>
        <div className="rounded-circle bg-warning"></div>
        <div className="rounded-circle bg-success"></div>
      </div>
      <div className="border-1 p-lg-4 p-3">
        <figure className="mb-4">
          <img src={imageSrc} alt="Project Title" className="w-100 rounded" />
        </figure>
        <code className="d-flex flex-column gap-2">
          <div className="d-flex gap-1">
            <span className="me-2 text-green">const</span>
            <span className="me-2 text-white">project</span>
            <span className="me-2 text-pink">=</span>
            <span className="text-gray">{"{"}</span>
          </div>
          <div className="ms-lg-4 ms-3 ">
            <span className="text-white">title:</span>
            <span className="text-gray">'</span>
            <span className="text-amber">{title}</span>
            <span className="text-gray">',</span>
          </div>
          <div className="ms-lg-4 ms-3">
            <span className="text-white">description:</span>
            <span className="text-gray">'</span>
            <span className="text-amber">{description}</span>
            <span className="text-gray">',</span>
          </div>
          <div className="ms-lg-4 ms-3 me-2 d-flex gap-1 flex-wrap">
            <span className="text-white">skills:</span>
            <span className="text-gray">{"["}</span>
            {skills.map((skill, index) => (
              <span key={index}>
                <span className="text-gray">'</span>
                <span className="text-amber">{skill}</span>
                <span className="text-gray">'</span>
                {index < skills.length - 1 && <span className="text-gray">, </span>}
              </span>
            ))}
            <span className="text-gray">{"]"}</span>
          </div>
          <div className="ms-lg-4 ms-3 ">
            <span className="text-white">duration:</span>
            <span className="text-gray">'</span>
            <span className="text-amber">{duration}</span>
            <span className="text-gray">',</span>
          </div>
          <div className="ms-lg-4 ms-3">
            <span className="me-2 text-white">associatedWith:</span>
            <span class="text-gray">'</span>
            <a href={associatedLink} className="text-amber">{associated}</a>
            <span className="text-gray">',</span>
          </div>
          <div>
            <span className="ms-2 text-gray">{"}"};</span>
          </div>
        </code>
        <div className="pt-3 text-center">
          <a href={link} className="hover2">Visit Website</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
