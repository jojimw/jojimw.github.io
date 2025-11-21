import * as React from "react";
import "./style/home.scss";
import Link from "gatsby-link";

import Navbar from './components/navbar';
import Footer from './components/footer/footer';
import { StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";


// markup
const IndexPage = () => {
  return (
    <div className="sitebody">

      <Helmet>
        <title>Joji Mathew</title>
        <link rel="canonical" href="https://jojimathew.xyz/" />
      </Helmet>

      <Navbar />
      <div className="home row">


        <div className="img">
          <StaticImage src="../images/banner.jpg" alt="jojimathew" />
        </div>



        <div className="content">

          <div className="me">
            <div className="site-container">
              <article>
                <h1>Joji Mathew</h1>
                <h2>Lead Software Engineer</h2>
                <a className="learn-more scroll-down" data-target=".bio" href="#moreIn">Read more</a>
              </article>
            </div>
          </div>

          <div className="more-me" id="moreIn">
            <div className="site-container">
              <article>
                <div className="bio">
                  <h1><span>Hey!</span></h1>
                  <br />
                  <p>
                    I am a Full-Stack Developer and Tech Lead with 7+ years of building software that millions of people use. I have architected AI-powered platforms, led engineering teams, served as CTO, and shipped a mobile app with 1M+ installs. What really excites me is creating products that solve real problems and mentoring developers to grow beyond where I am today.
                  </p>
                  <p>
                    My tech stack includes React, TypeScript, Node.js, AWS, and AI integrations. My real strength is turning big ideas into working features that people love. When not debugging or deploying, you will find me analyzing Formula 1 race strategies, playing badminton, or exploring new cities. I believe great software comes from curious minds, and I am endlessly curious about technology, design, and the world around us.
                  </p>
                </div>
              </article>
            </div>
          </div>

        </div>


      </div>
      <Footer />
    </div>
  )
}

export default IndexPage
