import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">

                <h2 className="about-title">Chi Sono</h2>

                {/* Blocco 1: Introduzione (Testo a sinistra, icone animate a destra) */}
                <div className="about-row">
                    <div className="about-col text-side">
                        <h3>Chi Sono</h3>
                        <p>
                            Come <strong> Application Support Technician </strong> copro l'intero spettro tra sviluppo, automazione e gestione dei sistemi aziendali.
                        </p>
                        <p>
                            Analizzo i problemi dal codice fino al device dell'utente, passando per automazione e policy di sicurezza. <br />
                            <br />
                            Sviluppo, gestione endpoint, flussi automatizzati, device, policy di sicurezza. Nessun compartimento stagno. Una visione a 360 gradi. Un unico obiettivo: rendere invisibili i confini che rallentano il lavoro.
                        </p>
                    </div>

                    <div className="about-col focus-side">
                        <div className="focus-box-dynamic">
                            {/* Flusso di 6 icone animate verticalmente */}
                            <div className="tech-icon-stream">

                                {/* 1. Microsoft 365 */}
                                <div className="icon-wrapper m365" title="Microsoft 365 & Cloud">
                                    <i className="fab fa-microsoft"></i>
                                </div>

                                {/* 2. Microsoft Intune (Rappresentato da Windows) */}
                                <div className="icon-wrapper intune" title="Microsoft Intune MDM">
                                    <i className="fab fa-windows"></i>
                                </div>

                                {/* 3. Jamf PRO (Rappresentato da Apple) */}
                                <div className="icon-wrapper jamf" title="Jamf PRO Apple MDM">
                                    <i className="fab fa-apple"></i>
                                </div>

                                {/* 4. NinjaOne RMM */}
                                <div className="icon-wrapper ninja" title="NinjaOne RMM">
                                    <i className="fas fa-user-ninja"></i>
                                </div>

                                {/* 5. Git / GitHub */}
                                <div className="icon-wrapper github-icon" title="Git & GitHub">
                                    <i className="fab fa-github"></i>
                                </div>

                                {/* 6. React Frontend */}
                                <div className="icon-wrapper react-icon" title="React.js Sviluppo Web">
                                    <i className="fab fa-react"></i>
                                </div>

                            </div>
                            <span className="stream-label">Sviluppo + Infrastruttura</span>
                        </div>
                    </div>
                </div>

                {/* Blocco 2: Web Development */}
                <div className="about-row row-reverse">
                    <div className="about-col text-side">
                        <h3>Web Development</h3>
                        <p>
                            Progetto e sviluppo interfacce web moderne, reattive e ottimizzate, curando ogni dettaglio del codice e dell'esperienza utente.
                        </p>
                        <div className="skills-tags">
                            <span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>TypeScript</span>
                            <span>React</span><span>Node.js</span><span>Express.js</span><span>REST API</span>
                            <span>MySQL</span><span>WordPress (Elementor)</span>
                        </div>
                    </div>
                    <div className="about-col icon-side">
                        <i className="fas fa-code main-icon"></i>
                    </div>
                </div>

                {/* Blocco 3: IT & Systems */}
                <div className="about-row">
                    <div className="about-col text-side">
                        <h3>IT & System Management</h3>
                        <p>
                            Gestisco infrastrutture IT aziendali, amministrazione di piattaforme SaaS e configurazione di sistemi MDM/RMM, garantendo la continuità operativa.
                        </p>
                        <div className="skills-tags it-tags">
                            <span>Microsoft Intune</span><span>Jamf PRO</span><span>NinjaOne</span>
                            <span>Google Workspace</span><span>Endpoint Management</span><span>Asset Management</span>
                            <span>Troubleshooting Rete</span>
                        </div>
                    </div>
                    <div className="about-col icon-side">
                        <i className="fas fa-server main-icon"></i>
                    </div>
                </div>

                {/* Blocco 4: Tool & Workflow */}
                <div className="about-row row-reverse">
                    <div className="about-col text-side">
                        <h3>Tool & Workflow</h3>
                        <p>
                            Utilizzo i principali strumenti di sviluppo e versioning per garantire un flusso di lavoro pulito, tracciabile e collaborativo.
                        </p>
                        <div className="skills-tags tools-tags">
                            <span>Git</span><span>GitHub</span><span>Postman</span><span>VS Code</span>
                        </div>
                    </div>
                    <div className="about-col icon-side">
                        <i className="fas fa-tools main-icon"></i>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;