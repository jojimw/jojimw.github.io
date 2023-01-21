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
        <title>Ayyoob Castro</title>
        <link rel="canonical" href="https://jojimathew.xyz/" />
      </Helmet>

      <Navbar />
      <div class="home row">


        <div class="img">
          <StaticImage src="../images/banner.jpg" alt="ayyoobcastro" />
        </div>



        <div class="content">

          <div class="me">
            <div class="site-container">
              <article>
                <h1>Ayyoob Castro</h1>
                <h2>Front End Developer</h2>
                <a class="learn-more scroll-down" data-target=".bio" href="#moreIn">Read more</a>
              </article>
            </div>
          </div>

          <div class="more-me" id="moreIn">
            <div class="site-container">
              <article>
                <div class="bio">
                  <h1><span>Hello,</span></h1>
                  <br />
                  <p>
                    I am very interested in web development and I choose it as my career. For the last 4 year and 10 months I have been working as a Front-end Developer at Code & Hue Web Design Studio. Now seeking a better opportunity at a technologically progressive organization where I can use my expertise and grow my skills  & ability as a developer.
                  </p>
                  <p>
                    To prove myself in the IT Industry by utilizing my skills and abilities in the Industry and find a better position that offers professional growth while being resourceful, innovative and flexible. Solid understanding of Software Development Life Cycle processes including Requirement gathering, Analysis and Design, Development tools and Technologies, Release and Version control.
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
