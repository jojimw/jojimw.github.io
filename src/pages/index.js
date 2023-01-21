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
      <div class="home row">


        <div class="img">
          <StaticImage src="../images/banner.jpg" alt="jojimathew" />
        </div>



        <div class="content">

          <div class="me">
            <div class="site-container">
              <article>
                <h1>Joji Mathew</h1>
                <h2>Lead Software Engineer</h2>
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
                    I am an Energetic Software Engineer and Team Lead with a strong interest in latest tech, keen to develop and execute robust, clean and performant software products. Look forward to mentoring people and shaping them into the best minds possible.
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
