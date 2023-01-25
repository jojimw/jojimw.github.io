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
                  <h1><span>Hello,</span></h1>
                  <br />
                  <p>
                    I am a Software Engineer and Tech Lead with a passion for technology, mentoring, and personal growth. I have a strong background in software development and have experience leading teams to deliver innovative solutions. I am always eager to learn new things and stay up-to-date with the latest advancements in the field.
                  </p>
                  <p>
                    As an engineer, I am always looking for ways to push the boundaries of technology and improve upon existing solutions. When I am not working, I enjoy traveling, playing badminton, and indulging in my love for Formula 1 and football. These passions give me a chance to explore new places, cultures, and activities, and also to stay active and refreshed when I am not working on new projects.
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
