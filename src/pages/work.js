import React from "react";
import "./style/work.scss";

import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const TechTag = ({ tech }) => (
    <span className="tech-tag">{tech}</span>
);

const Work = () => {
    return (
        <div className="sitebody">
            <Helmet>
                <title>Works</title>
                <link rel="canonical" href="https://jojimathew.xyz/work/" />
            </Helmet>
            <Navbar />
            <section className="works">
                <div className="container-2">
                    <article>

                        <div className="row">

                            <div className="col-half">
                                <div className="content">
                                    <div className="main-content">
                                        <h3 className="project-name"><span>F</span>ayette Innovations</h3>
                                        <p className="project-description">
                                            A modern, lightweight website for Fayette Innovations which designs and develops cutting edge technology for pregnant women to monitor their BP and other vital parameters continuously and non-invasively, regardless of their socio-economic status.
                                        </p>
                                        <div className="tech-stack">
                                            <TechTag tech="HTML5" />
                                            <TechTag tech="CSS3" />
                                            <TechTag tech="JavaScript" />
                                        </div>
                                        <a href="https://jojimathew.xyz/fayette/" target="_blank" className="project-link">
                                            <span>Visit Site</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-half">
                                <div className="image">
                                    <StaticImage src="../images/fayette.jpg" alt="Fayette Innovations" />
                                </div>
                            </div>

                        </div>

                    </article>
                </div>
            </section>

            <div className="other-work">
                <div className="container-2">
                    <article>

                        <div className="project">
                            <figure>
                                <StaticImage src="../images/thoughtspot.jpg" alt="ThoughtSpot AI Platform" />
                                <figcaption>
                                    <span className="project-name">AI-Powered Analytics Platform (ThoughtSpot)</span>
                                    <p className="project-description">
                                        Built scalable UI components and AI-integrated chatbot with recommendation engine using OpenAI API. Implemented end-to-end automation test suite with Playwright achieving 95% test coverage.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="TypeScript" />
                                        <TechTag tech="GraphQL" />
                                        <TechTag tech="Node.js" />
                                        <TechTag tech="OpenAI API" />
                                        <TechTag tech="Playwright" />
                                    </div>
                                    <a href="https://thoughtspot.com/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/delightree.jpg" alt="Delightree SOP Converter" />
                                <figcaption>
                                    <span className="project-name">SOP-to-Todo List Converter (Delightree)</span>
                                    <p className="project-description">
                                        Innovative feature that automatically converts Standard Operating Procedures into actionable todo lists, reducing task creation time by 30% and boosting user engagement with standardized workflows.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="Apollo GraphQL" />
                                        <TechTag tech="Node.js" />
                                        <TechTag tech="MongoDB" />
                                    </div>
                                    <a href="https://www.delightree.com/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/lummoshop.jpg" alt="LummoSHOP Mobile App" />
                                <figcaption>
                                    <span className="project-name">LummoSHOP</span>
                                    <p className="project-description">
                                        LummoSHOP, a full-featured mobile shopping platform for iOS and Android. Implemented core features including product browsing, search functionality, cart management, and secure payment integration.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React Native" />
                                        <TechTag tech="GraphQL" />
                                        <TechTag tech="AWS S3" />
                                        <TechTag tech="Redux Toolkit" />
                                        <TechTag tech="TypeScript" />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/sieve.png" alt="Sieve Freelancer Platform" />
                                <figcaption>
                                    <span className="project-name">Sieve</span>
                                    <p className="project-description">
                                        Complete platform for technology freelancers managing workflows including custom websites, client onboarding, scheduling, invoicing, and payment routing. Improved initial load time by 40% through server-side rendering optimization.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="Redux.js" />
                                        <TechTag tech="Redux-Saga" />
                                        <TechTag tech="Node.js" />
                                        <TechTag tech="Express.js" />
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/eadath.jpg" alt="EADATH B2B Platform" />
                                <figcaption>
                                    <span className="project-name">EADATH</span>
                                    <p className="project-description">
                                        EADATH is the B2B Discovery and Engagement platform that helps to empower Global Trade business. Architected and delivered a production-ready platform from stakeholder requirements to deployment, establishing robust CI/CD pipelines that reduced deployment time by 30%.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="Next.js" />
                                        <TechTag tech="TypeScript" />
                                        <TechTag tech="Node.js" />
                                        <TechTag tech="Nest.js" />
                                        <TechTag tech="PostgreSQL" />
                                        <TechTag tech="AWS" />
                                    </div>
                                    <a href="https://eadath.com/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/urbandrive.jpg" alt="UrbanDrive Vehicle App" />
                                <figcaption>
                                    <span className="project-name">UrbanDrive</span>
                                    <p className="project-description">
                                        Modern vehicle browsing application featuring advanced filtering capabilities and seamless responsive design. Delivers an intuitive user experience across all devices for exploring and discovering vehicles from UrbanDrive's inventory.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="TypeScript" />
                                    </div>
                                    <a href="https://jojimathew.xyz/car-rental-react-app/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/course-builder.jpg" alt="Course Builder App" />
                                <figcaption>
                                    <span className="project-name">Course Builder</span>
                                    <p className="project-description">
                                        Streamlined web interface for creating and managing educational courses with integrated ad campaign management tools. Simplifies course creation workflow with an intuitive dashboard for administrators.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="React.js" />
                                        <TechTag tech="JavaScript" />
                                    </div>
                                    <a href="https://jojimathew.xyz/course-builder-react-app/#/dashboard" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <div className="placeholder-image">
                                    <div className="placeholder-content">
                                        <h4>PDF & Poster Generation</h4>
                                        <p>Microservices</p>
                                    </div>
                                </div>
                                <figcaption>
                                    <span className="project-name">Automated PDF & Poster Generation Microservices</span>
                                    <p className="project-description">
                                        Built two Node.js microservices: one using headless Chrome for dynamic HTML-to-PDF conversion, and another using ImageMagick for personalized poster generation, both integrated with AWS S3.
                                    </p>
                                    <div className="tech-stack">
                                        <TechTag tech="Node.js" />
                                        <TechTag tech="Express.js" />
                                        <TechTag tech="Headless Chrome" />
                                        <TechTag tech="ImageMagick" />
                                        <TechTag tech="AWS S3" />
                                    </div>
                                    <div className="dual-links">
                                        <a href="https://github.com/jojimw/html-to-pdf-async" target="_blank" className="project-link github-link">
                                            <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span>PDF Service</span>
                                        </a>
                                        <a href="https://github.com/jojimw/poster-generator" target="_blank" className="project-link github-link">
                                            <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                            </svg>
                                            <span>Poster Service</span>
                                        </a>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>

                    </article>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work