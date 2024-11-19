import React, { Fragment } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Apiary Connect</title>
          <meta property="og:title" content="Apiary Connect" />
        </Head>
        <Navbar
          heading={
            <Fragment>
              <span className="home-text10">Apiary Connect</span>
            </Fragment>
          }
          logoSrc="/apiaryconnect_logo_nobackground-1500h.png"
          logoAlt="My Logo"
          aboutmeUrl="https://apiary-connect-next.vercel.app/about"
          contactURL="https://apiary-connect-next.vercel.app/contact"
          homeURL="https://apiary-connect-next.vercel.app"
        ></Navbar>
        <Hero
          imageSrc="/profiler_pic-200h.png"
          imageAlt="My Logo"
          action1={
            <Fragment>
              <span className="home-text-def">Download My Resume</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text-def">Email Me</span>
            </Fragment>
          }
          action3={
            <Fragment>
              <span className="home-text-def">Visit My LinkedIn </span>
            </Fragment>
          }
          content={
            <Fragment>
              <span className="home-text-def">
                <span className="home-text-content">
                  Apiary Connect is my personal project and creative playground,
                  inspired by the interconnectedness of bee colonies and their
                  harmonious efficiency. It’s where I experiment with developing
                  innovative automation and IoT solutions that bridge technology
                  and daily life.
                </span>
                <br></br>
                <br></br>
                <span className="home-text-content">
                  This platform allows me to explore the potential of smart
                  systems, from automating home environments to building tools
                  that enhance productivity and convenience. Apiary Connect
                  reflects my passion for simplifying complex processes,
                  creating synergy between devices, and pushing the boundaries
                  of what’s possible with interconnected systems.
                </span>
                <br></br>
                <br></br>
                <span className="home-text-content">
                  Feel free to reach out or visit my LinkedIn profile for
                  inquiries!
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text-def">Nick Breneman</span>
            </Fragment>
          }
        ></Hero>
        <Footer
          copyright={
            <Fragment>
              <span className="home-text-def">
                © 2023 Apiary Connect. All Rights Reserved.
              </span>
            </Fragment>
          }
          rootClassName="footerroot-class-name"
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text-def {
            display: inline-block;
          }
          .home-text-content {
            color: var(--dl-color-theme-neutral-dark);
          }
        `}
      </style>
    </>
  );
};

export default Home;
