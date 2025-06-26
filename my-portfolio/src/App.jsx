import { useState } from "react";
import "./App.css";

function App() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Uniform Detector App",
      description:
        "An Android app using YOLO + TensorFlow Lite to detect incomplete school uniforms. Includes student form and PHP backend.",
    },
    {
      title: "Study Helper App",
      description:
        "A task management system with MySQL database that helps students organize tasks, set due dates, and track progress efficiently.",
    },
    {
      title: "Street Feeder: Arduino-based",
      description:
        "A simple Arduino-based system that feeds a stray animals using an automatic feeder.",
    },
  ];

  const skills = [
    { name: "React.js", icons: ["react.png"] },
    { name: "Node.js", icons: ["nodejs.png"] },
    { name: "NestJS", icons: ["nestjs.png"] },
    { name: "JavaScript", icons: ["javascript.png"] },
    { name: "MySQL + Prisma", icons: ["mysql.png", "prisma.png"] },
    { name: "HTML / CSS", icons: ["html.png", "css.png"] },
  ];

  return (
    <div className="app-wrapper">
      <div className="container">
        <div className="main-card">
          <div className="content-layout">
            {/* Left Column - Profile */}
            <div className="left-column">
              <div className="profile-section">
                <div className="profile-pic-container">
                  <div className="profile-pic-frame">
                    <img
                      src="profilepic.jpeg"
                      alt="Samantha Jungco"
                      className="profile-pic"
                    />
                  </div>
                  <div className="status-indicator"></div>
                </div>

                <h1 className="name">Angel Jungco</h1>
                <p className="title">Computer Science Student</p>

                <div className="about-section">
                  <h2 className="about-title">
                    <span className="title-dot"></span>
                    About Me
                  </h2>
                  <p className="about-text">
                    A Computer Science student exploring backend development
                    with NestJS, JWT authentication, Prisma, and MySQL. I love
                    creating full-stack apps with clean design and smooth
                    functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills & Projects */}
            <div className="right-column">
              {/* Skills Section */}
              <div className="skills-section">
                <h2 className="section-title">
                  <span className="title-bar"></span>
                  Software Skills
                </h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-icons-container">
                        {skill.icons.map((iconSrc, iconIndex) => (
                          <img
                            key={iconIndex}
                            src={iconSrc}
                            alt={skill.name}
                            className="skill-icon"
                          />
                        ))}
                      </div>
                      <span className="skill-text">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects Section */}
              <div className="projects-section">
                <h2 className="section-title">
                  <span className="title-bar projects-bar"></span>
                  Academic Projects
                </h2>
                <div className="projects-grid">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="project-card"
                      onClick={() => setActiveProject(project)}
                    >
                      <div className="project-content">
                        <div className="project-dot"></div>
                        <h3 className="project-title">{project.title}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <div className="modal-overlay" onClick={() => setActiveProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-x-btn"
              onClick={() => setActiveProject(null)}
              aria-label="Close modal"
            >
               ❌
            </button>
            <div className="modal-header">
              <div className="modal-dot"></div>
              <h3 className="modal-title">{activeProject.title}</h3>
            </div>
            <p className="modal-description">{activeProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
