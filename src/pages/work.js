import React from "react";
import "./style/work.scss";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";

const Work = () => {
    return (
        <div className="sitebody">
            <Helmet>
                <title>Works</title>
                <link rel="canonical" href="https://jojimathew.xyz/" />
            </Helmet>
            <Navbar />
            <section className="works">
                <div className="site-container">
                    <article>

                        <div className="row">

                            <div className="col-half">
                                <div className="content">
                                    <div className="main-content">
                                        <h3 className="project-name"><span>A</span>BC Emporio</h3>
                                        <a href="https://www.abcemporio.com/" target="_blank" className="project-link">
                                            <span>Visit Site</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-half">
                                <div className="image">
                                    <StaticImage src="../images/abc.png" alt="ABC Emporio" />
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
                                <StaticImage src="../images/codeandhue.png" alt="Code & Hue" />
                                <figcaption>
                                    <span className="project-name">Code & Hue</span>
                                    <a href="https://www.codeandhue.com/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/oqc.png" alt="OQC" />
                                <figcaption>
                                    <span className="project-name">OQC</span>
                                    <a href="https://oqc.ae/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/spillets.png" alt="Spillets" />
                                <figcaption>
                                    <span className="project-name">Spillets</span>
                                    <a href="https://spillets.com/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/dtale.png" alt="Dtale Decor" />
                                <figcaption>
                                    <span className="project-name">Dtale Decor</span>
                                    <a href="https://dtaledecor-html.vercel.app/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="project">
                            <figure>
                                <StaticImage src="../images/els.png" alt="ELS" />
                                <figcaption>
                                    <span className="project-name">ELS</span>
                                    <a href="https://www.els.in/" target="_blank" className="project-link">
                                        <span>Visit Site</span>
                                    </a>
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