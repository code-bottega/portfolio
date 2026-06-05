import React, { useState } from 'react';
import data from '../data/data.json';
import './Projects.css';

const Projects = () => {
    const { projects, skills } = data;
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section className="projects" id='projects'>
            <div className="project-container">
                {/* SEZIONE INTRODUTTIVA */}
                <div className="project-header">
                    <h2 className="section-title">Sviluppo di Concept</h2>
                    <p className="project-subtitle">
                        Una raccolta di concept progettuali sviluppati per scenari reali. Ogni lavoro dimostra come un'idea, attraverso una struttura solida e un'interfaccia studiata, possa diventare un prototipo funzionale e pronto per l'uso.
                    </p>

                    {/* CAROSELLO SKILLS */}
                    <div className="skills-marquee">
                        <div className="marquee-content">
                            {skills.map((skill, index) => (
                                /* Aggiungiamo 'colored' alla lista delle classi */
                                <i key={`f1-${index}`} className={`${skill} colored skill-icon`}></i>
                            ))}
                            {skills.map((skill, index) => (
                                /* Ripetiamo anche qui per il secondo giro */
                                <i key={`f2-${index}`} className={`${skill} colored skill-icon`}></i>
                            ))}
                        </div>
                    </div>

                    <div className="header-decoration"></div>
                </div>

                {/* GRIGLIA PROGETTI (Inserita nel container per allineamento) */}
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <button 
                                        className="btn-vedi-progetto"
                                        onClick={() => openModal(project)}
                                    >
                                        Vedi Progetto
                                    </button>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, index) => (
                                        <span key={index}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MODAL DETTAGLI PROGETTO RESPONSIVE */}
            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>✕</button>
                        <div className="modal-project">
                            <div className="modal-image-wrapper">
                                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                            </div>
                            <div className="modal-project-info">
                                <h2 className="modal-title">{selectedProject.title}</h2>
                                <p className="modal-description">{selectedProject.description}</p>
                                <div className="modal-tech">
                                    {selectedProject.tech.map((t, index) => (
                                        <span key={index} className="modal-tech-badge">{t}</span>
                                    ))}
                                </div>
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target='_blank' rel='noreferrer' className="modal-link-btn">
                                        Visita il Progetto
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;