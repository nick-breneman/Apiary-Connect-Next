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
          action1={
            <Fragment>
              <span className="home-text11">Download My Resume</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text12">Email Me</span>
            </Fragment>
          }
          action21={
            <Fragment>
              <span className="home-text13">Visit My LinkedIn </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text14">
                <span className="home-text15">
                  Apiary Connect is my personal project and creative playground,
                  inspired by the interconnectedness of bee colonies and their
                  harmonious efficiency. It’s where I experiment with developing
                  innovative automation and IoT solutions that bridge technology
                  and daily life.
                </span>
                <br className="home-text16"></br>
                <br className="home-text17"></br>
                <span className="home-text18">
                  This platform allows me to explore the potential of smart
                  systems, from automating home environments to building tools
                  that enhance productivity and convenience. Apiary Connect
                  reflects my passion for simplifying complex processes,
                  creating synergy between devices, and pushing the boundaries
                  of what’s possible with interconnected systems.
                </span>
                <br className="home-text19"></br>
                <br className="home-text20"></br>
                <span className="home-text21">
                  Feel free to reach out or visit my LinkedIn profile for
                  inquiries!
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text23">Nick Breneman</span>
            </Fragment>
          }
        ></Hero>
        <Footer
          copyright={
            <Fragment>
              <span className="home-text24">
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
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text16 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text17 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text18 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text19 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text20 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text21 {
            color: var(--dl-color-theme-neutral-dark);
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
        `}
      </style>
    </>
  );
};

export default Home;
