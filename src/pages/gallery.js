import React from "react";
import "./style/gallery.scss";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";


const Gallery = () => {
    return (
        <div className="sitebody">

            <Helmet>
                <title>Gallery</title>
                <link rel="canonical" href="https://jojimathew.xyz/" />
            </Helmet>

            <Navbar />

            <section className="gallery">
                <div className="site-container">
                    <article>
                        <h1>Photography</h1>
                        <div className="grid">
                            <div className="image">
                                <StaticImage src="../images/photography/photography2.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography3.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography4.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography5.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography6.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography7.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography8.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography9.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography10.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography11.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography13.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography14.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography16.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography17.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography18.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography19.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography20.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography21.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography22.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography23.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography24.JPG" alt="ABC Emporio" />
                            </div>
                            <div className="image">
                                <StaticImage src="../images/photography/photography25.JPG" alt="ABC Emporio" />
                            </div>
                        </div>

                        <a className="more-btn" target="_blank" href="https://www.instagram.com/ayyoobcastro/" >More on <span>Instagram</span></a>

                    </article>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Gallery