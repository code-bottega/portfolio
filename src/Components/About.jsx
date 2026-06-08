import React from 'react';
import './About.css';
import { SiReact } from 'react-icons/si';

// 1. MICROSOFT 365 (Ufficiali a 4 quadrati)
const MicrosoftMultiColor = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" width="34" height="34">
        <rect x="0" y="0" width="10.5" height="10.5" fill="#f25022" />
        <rect x="12.5" y="0" width="10.5" height="10.5" fill="#7fba00" />
        <rect x="0" y="12.5" width="10.5" height="10.5" fill="#00a4ef" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" fill="#ffb900" />
    </svg>
);

// 2. MICROSOFT INTUNE (Logo Autentico - Onda Sfumata)
const IntuneAutentico = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="36" height="36">
        <defs>
            <linearGradient id="intuneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#30cdff" />
                <stop offset="50%" stopColor="#0078d4" />
                <stop offset="100%" stopColor="#004b87" />
            </linearGradient>
        </defs>
        <path fill="url(#intuneGrad)" d="M6 2c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h4c1.5 0 2.7-.9 3.2-2.2l4.3-11.5c.3-.7.9-1.1 1.6-1.1h5.9c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4c-1.5 0-2.7.9-3.2 2.2L13.5 13.7c-.3.7-.9 1.1-1.6 1.1H6V2z" />
        <path fill="#0078d4" opacity="0.3" d="M25 9h-5.9c-1.5 0-2.7.9-3.2 2.2l-1.4 3.7 5.7 5.7 4.8-4.8c.3-.3.4-.7.4-1.1V9z" />
    </svg>
);

// 3. JAMF PRO (Logo Autentico - I 3 Blocchi Geometrici)
const JamfAutentico = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="36" height="36">
        <path fill="#4c5b70" d="M15 15 h25 v15 h-15 v25 h-10 z" opacity="0.85" />
        <path fill="#718096" d="M45 15 h35 v35 h-20 v-15 h-15 z" opacity="0.9" />
        <path fill="#1a202c" d="M15 60 h50 v25 h-50 z" />
    </svg>
);

// 4. NINJAONE (Logo Autentico - La "n" geometrica bianca su sfondo scuro dashboard)
const NinjaOneAutentico = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="36" height="36">
        <rect width="64" height="64" rx="14" fill="#1e293b" />
        <path fill="#ffffff" d="M18 16h8v6c1.8-3.8 4.5-6 9-6 6.5 0 11 4.2 11 11.5V48h-8V28.5c0-3.2-1.5-4.5-4-4.5-3 0-5 2.2-5 5.5V48h-8V16z" />
    </svg>
);

// 5. GIT (Logo Autentico - Romboidale con Branching Geometrico)
const GitAutentico = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="36" height="36">
        <path fill="#f05032" d="M90.7 45.4L54.6 9.3c-2.5-2.5-6.5-2.5-9 0L36 18.2l10.4 10.4c2.6-.9 5.7-.3 7.8 1.8 2.2 2.2 2.7 5.3 1.7 7.9l10.5 10.5c2.6-1 5.7-.5 7.9 1.7 3.1 3.1 3.1 8.1 0 11.2s-8.1 3.1-11.2 0c-2.3-2.3-2.7-5.5-1.5-8.1L51.3 52.2v18c1.3.6 2.4 1.7 3 3.1 1.7 3.9-.1 8.4-4 10.1s-8.4-.1-10.1-4c-1.3-3-.7-6.5 1.5-8.8V51.7c-2.2-2.3-2.7-5.7-1.5-8.6L29.9 32.8c-2.5 2.5-6.5 2.5-9 0L9.3 21.1c-2.5-2.5-2.5-6.5 0-9L45.4 9.3c2.5-2.5 6.5-2.5 9 0l36.3 36.1c2.5 2.5 2.5 6.5 0 9l-9 9c-2.5 2.5-6.5 2.5-9 0z" />
    </svg>
);

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h2 className="about-title">Chi Sono</h2>

                {/* Prima Riga: Testo Introduzione + Riquadro Stream Icone */}
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
                            <div className="tech-icon-stream">

                                <div className="icon-wrapper m365" title="Microsoft 365">
                                    <div className="brand-square">
                                        <MicrosoftMultiColor />
                                    </div>
                                </div>

                                <div className="icon-wrapper intune" title="Microsoft Intune">
                                    <div className="brand-square">
                                        <IntuneAutentico />
                                    </div>
                                </div>

                                <div className="icon-wrapper jamf" title="Jamf PRO">
                                    <div className="brand-square">
                                        <JamfAutentico />
                                    </div>
                                </div>

                                <div className="icon-wrapper ninja" title="NinjaOne RMM">
                                    <div className="brand-square">
                                        <NinjaOneAutentico />
                                    </div>
                                </div>

                                <div className="icon-wrapper git-icon" title="Git">
                                    <div className="brand-square">
                                        <GitAutentico />
                                    </div>
                                </div>

                                <div className="icon-wrapper react-icon" title="React.js Sviluppo Web">
                                    <div className="brand-square">
                                        <SiReact />
                                    </div>
                                </div>

                            </div>
                            <span className="stream-label">Sviluppo + Infrastruttura</span>
                        </div>
                    </div>
                </div>

                {/* Seconda Riga: Web Development */}
                <div className="about-row row-reverse">
                    <div className="about-col text-side">
                        <h3>Web Development</h3>
                        <p>Progetto e sviluppo interfacce web moderne, reattive e ottimizzate, curando ogni dettaglio del codice e dell'esperienza utente.</p>
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

                {/* Terza Riga: IT Management */}
                <div className="about-row">
                    <div className="about-col text-side">
                        <h3>IT & System Management</h3>
                        <p>Gestisco infrastrutture IT aziendali, amministrazione di piattaforme SaaS e configurazione di sistemi MDM/RMM, garantendo la continuità operativa.</p>
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

                {/* Quarta Riga: Tools */}
                <div className="about-row row-reverse">
                    <div className="about-col text-side">
                        <h3>Tool & Workflow</h3>
                        <p>Utilizzo i principali strumenti di sviluppo e versioning per garantire un flusso di lavoro pulito, tracciabile e collaborativo.</p>
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