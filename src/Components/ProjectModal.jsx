import React from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <>
            {/* Overlay */}
            <div className="modal-overlay" onClick={onClose} />

            {/* Modal */}
            <div className="modal-container">
                <button className="modal-close" onClick={onClose} aria-label="Chiudi">
                    ✕
                </button>

                <div className="modal-content">
                    {/* Immagine del progetto */}
                    <div className="modal-image-wrapper">
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="modal-image"
                        />
                    </div>

                    {/* Dettagli del progetto */}
                    <div className="modal-details">
                        <h2 className="modal-title">{project.title}</h2>
                        
                        <p className="modal-description">
                            {project.description}
                        </p>

                        {/* Tecnologie */}
                        <div className="modal-tech-section">
                            <h3 className="modal-section-title">Tecnologie Utilizzate</h3>
                            <div className="modal-tech-tags">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="modal-tech-tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="modal-actions">
                            <a 
                                href={project.link || '#'} 
                                target="_blank" 
                                rel="noreferrer"
                                className="modal-btn-primary"
                            >
                                Visita il Progetto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectModal;
