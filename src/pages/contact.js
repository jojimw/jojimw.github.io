import React from "react";
import "./style/contact.scss";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <div className="sitebody">
            <Helmet>
                <title>Contact</title>
                <link rel="canonical" href="https://jojimathew.xyz/" />
            </Helmet>
            <Navbar />
            <section className="contact">
                <div className="container-2">
                    <article>
                        <h3>Reach me at</h3>
                        <div className="items">
                            <a href="mailto:ayyoobcastro@icloud.com">ayyoobcastro@icloud.com</a>
                            <a href="tel:+918943019850">+91 894 301 9850</a>
                        </div>
                        <div className="follow">
                            <ul>
                                <li>
                                    <a href="https://github.com/jojimw" target="_blank">
                                        <span> github</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/jojimw" target="_blank">
                                        <span> twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/jojimw/" target="_blank">
                                        <span> instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jojimw/" target="_blank">
                                        <span> linkedIn</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact