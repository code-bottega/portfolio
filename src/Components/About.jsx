import React from 'react';
import './about.css';
import { FaReact, FaGitAlt, FaWordpress, FaHtml5, FaCss3Alt, FaNodeJs, FaNetworkWired, FaGithub } from 'react-icons/fa6';
import { SiClaude, SiTypescript, SiExpress, SiGoogle, SiPostman } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { IoLogoJavascript } from 'react-icons/io5';
import { DiMysql } from 'react-icons/di';
import { MdOutlineSecurity, MdMemory, MdLaptopMac, MdDvr } from 'react-icons/md';

export default function About() {
    return (
        <div className="about-container">

            {/* SEZIONE HERO: APPLICATION SUPPORT TECHNICIAN (BLOCCO 1) */}
            <section className="hero-section">
                <div className="hero-text">
                    <h1 className="section-title">
                        <span className="text-gradient">Application Support Technician</span>
                    </h1>

                    <p className="hero-description">
                        Come <span className="highlight-text"><em>AST</em></span> copro l'intero spettro tra sviluppo, automazione e gestione di infrastrutture aziendali.
                    </p>
                    <p className="hero-description">
                        Dal codice fino al device dell'utente, passando per automazione e monitoraggio continuo.
                    </p>
                    <p className="hero-description">
                        Endpoint, flussi automatizzati, device, policy di sicurezza. <br /> Una visione a 360°. Un unico obiettivo: rendere invisibili i problemi e fluido il lavoro.
                    </p>

                    {/* Blocco 360° VI */}
                    <div className="vision-360-container">
                        <div className="vision-pulse"></div>
                        <div className="vision-content">
                            <span className="vision-number">360°</span>
                            <div className="vision-line"></div>
                            <span className="vision-label">VISIONE INTEGRATA</span>
                        </div>
                    </div>
                </div>

                {/* Sistema Orbitale */}
                <div className="hero-animation">
                    <div className="central-hub-glow"></div>
                    <div className="central-hub">
                        <div className="grid-logo">
                            <span className="dot red"></span>
                            <span className="dot green"></span>
                            <span className="dot blue"></span>
                            <span className="dot yellow"></span>
                        </div>
                    </div>

                    <div className="orbit orbit-inner">
                        <div className="icon-wrapper icon-claude" title="Claude AI">
                            <SiClaude />
                        </div>
                        <div className="icon-wrapper icon-git" title="Git">
                            <FaGitAlt />
                        </div>
                    </div>

                    <div className="orbit orbit-outer">
                        <div className="icon-wrapper icon-react" title="React.jsx">
                            <FaReact />
                        </div>
                        <div className="icon-wrapper icon-vscode" title="Visual Studio Code">
                            <VscVscode />
                        </div>
                        <div className="icon-wrapper icon-elementor" title="WordPress Elementor">
                            <FaWordpress />
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE WEB DEVELOPMENT (BLOCCO 2) */}
            <section className="skills-section webdev-section">
                <div className="webdev-bg-orbital">
                    <div className="wd-orbit wd-orbit-1">
                        <div className="wd-icon" style={{ color: '#E34F26' }}><FaHtml5 /></div>
                        <div className="wd-icon" style={{ color: '#1572B6' }}><FaCss3Alt /></div>
                        <div className="wd-icon" style={{ color: '#F7DF1E' }}><IoLogoJavascript /></div>
                    </div>
                    <div className="wd-orbit wd-orbit-2">
                        <div className="wd-icon" style={{ color: '#3178C6' }}><SiTypescript /></div>
                        <div className="wd-icon" style={{ color: '#61DAFB' }}><FaReact /></div>
                        <div className="wd-icon" style={{ color: '#339933' }}><FaNodeJs /></div>
                    </div>
                    <div className="wd-orbit wd-orbit-3">
                        <div className="wd-icon" style={{ color: '#ffffff' }}><SiExpress /></div>
                        <div className="wd-icon" style={{ color: '#4479A1' }}><DiMysql /></div>
                        <div className="wd-icon" style={{ color: '#21759B' }}><FaWordpress /></div>
                    </div>
                </div>

                <div className="webdev-content">
                    <div className="webdev-text-side">
                        <h2 className="webdev-title">
                            Web <span className="text-gradient-purple">Development</span>
                        </h2>
                        <p className="webdev-subtitle">
                            Sviluppo interfacce web concentrandomi sulla sostanza: codice ordinato, pagine che si caricano velocemente e layout che non si rompono tra computer e smartphone. Non uso formule magiche; mi assicuro semplicemente che la struttura sia stabile, priva di bug e fluida per chi la naviga.                        </p>
                    </div>

                    <div className="webdev-tags-side">
                        <div className="tags-grid-custom">
                            <span className="skill-tag-custom tag-html5">HTML5</span>
                            <span className="skill-tag-custom tag-css3">CSS3</span>
                            <span className="skill-tag-custom tag-js">JavaScript</span>
                            <span className="skill-tag-custom tag-ts">TypeScript</span>
                            <span className="skill-tag-custom tag-react">React</span>
                            <span className="skill-tag-custom tag-node">Node.js</span>
                            <span className="skill-tag-custom tag-express">Express.js</span>
                            <span className="skill-tag-custom tag-rest">REST API</span>
                            <span className="skill-tag-custom tag-mysql">MySQL</span>
                            <span className="skill-tag-custom tag-wp">WordPress</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE IT & SYSTEM MANAGEMENT (BLOCCO 3) */}
            <section className="skills-section sysman-section">
                <div className="sysman-bg-orbital">
                    <div className="sm-orbit sm-orbit-1">
                        <div className="sm-icon" style={{ color: '#0078d4' }}><span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>MI</span></div>
                        <div className="sm-icon" style={{ color: '#EA4335' }}><SiGoogle /></div>
                    </div>
                    <div className="sm-orbit sm-orbit-2">
                        <div className="sm-icon" style={{ color: '#10b981' }}><MdOutlineSecurity /></div>
                        <div className="sm-icon" style={{ color: '#a855f7' }}><FaNetworkWired /></div>
                        <div className="sm-icon" style={{ color: '#38bdf8' }}><MdLaptopMac /></div>
                        <div className="sm-icon" style={{ color: '#4ade80' }}><MdDvr /></div>
                    </div>
                </div>

                <div className="sysman-content">
                    <div className="sysman-text-side">
                        <h2 className="sysman-title">
                            IT & <span className="text-gradient-cyan">System Management</span>
                        </h2>
                        <p className="sysman-subtitle">
                            Gestisco infrastrutture IT aziendali, amministrazione di piattaforme SaaS e configurazione di sistemi MDM/RMM, garantendo la totale continuità operativa e la sicurezza degli endpoint.
                        </p>
                    </div>

                    <div className="sysman-tags-side">
                        <div className="tags-grid-custom">
                            <span className="skill-tag-custom tag-intune">Microsoft Intune</span>
                            <span className="skill-tag-custom tag-jamf">Jamf PRO</span>
                            <span className="skill-tag-custom tag-ninja">NinjaOne</span>
                            <span className="skill-tag-custom tag-google">Google Workspace</span>
                            <span className="skill-tag-custom tag-endpoint">Endpoint Management</span>
                            <span className="skill-tag-custom tag-asset">Asset Management</span>
                            <span className="skill-tag-custom tag-rete">Troubleshooting Rete</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEZIONE TOOL & WORKFLOW (BLOCCO 4) */}
            <section className="skills-section tools-section">
                {/* Sfondo orbitale specifico */}
                <div className="tools-bg-orbital">
                    <div className="tl-orbit tl-orbit-1">
                        <div className="tl-icon" style={{ color: '#f05032' }}><FaGitAlt /></div>
                        <div className="tl-icon" style={{ color: '#ffffff' }}><FaGithub /></div>
                    </div>
                    <div className="tl-orbit tl-orbit-2">
                        <div className="tl-icon" style={{ color: '#ff6c37' }}><SiPostman /></div>
                        {/* Sistemato qui: VscVscode al posto dell'import mancante */}
                        <div className="tl-icon" style={{ color: '#007acc' }}><VscVscode /></div>
                    </div>
                </div>

                <div className="tools-content">
                    <div className="tools-text-side">
                        <h2 className="tools-title">
                            Tool & <span className="text-gradient-orange">Workflow</span>
                        </h2>
                        <p className="tools-subtitle">
                            Utilizzo i principali strumenti di sviluppo, tracciamento e versioning per garantire un flusso di lavoro pulito, tracciabile e altamente collaborativo.
                        </p>
                    </div>

                    <div className="tools-tags-side">
                        <div className="tags-grid-custom">
                            <span className="skill-tag-custom tag-git">Git</span>
                            <span className="skill-tag-custom tag-github">GitHub</span>
                            <span className="skill-tag-custom tag-postman">Postman</span>
                            <span className="skill-tag-custom tag-vscode">VS Code</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}