import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Full Stack Intern</h4>
                <h5>Uniq Technologies, Chennai</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed full-stack Python training covering Django, Flask, HTML,
              CSS, and JavaScript. Built real-world web applications. Integrated
              APIs and automated workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>Gaude Business Solutions, Techno Park</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing scalable backend services and REST APIs using Python and
              Django. Implementing object-oriented design and agile development
              practices. Collaborating with teams to optimize algorithms and
              system performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
