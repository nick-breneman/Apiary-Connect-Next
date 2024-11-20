import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import About_Me from "../components/about_me";
import Professional_Experience from "../components/professional_experience";
import Key_Achievements from "../components/key_achievements";
import Technical_Skills from "../components/technical_skills";
import Education_And_Certifications from "../components/education_and_certifications";
import CTA from "../components/cta";
import Footer from "../components/footer";

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <Head>
          <title>About - Apiary Connect</title>
          <meta property="og:title" content="About - Apiary Connect" />
        </Head>
        <Navbar
          heading={
            <Fragment>
              <span className="home-text-def">Apiary Connect</span>
            </Fragment>
          }
          logoSrc="ac_logo.png"
          logoAlt="My Logo"
          aboutmeURL="https://apiary-connect-next.vercel.app/about"
          contactURL="https://apiary-connect-next.vercel.app/contact"
          homeURL="https://apiary-connect-next.vercel.app"
        ></Navbar>
        <About_Me
          content1={
            <Fragment>
              <span className="about-text11">
                I am an experienced RPA developer with a proven track record of
                designing automation solutions that enhance workflows, boost
                efficiency, and uphold data integrity. I’m passionate about
                leveraging innovative tools and programming expertise to deliver
                impactful operational improvements and drive meaningful change.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text12">About Nick Breneman</span>
            </Fragment>
          }
          hero2imageSrc="/hero_2_image.png"
          hero2imageAlt="About Image 1"
        ></About_Me>
        <Professional_Experience
          pro_expAlt="pro_exp"
          pro_expSrc="/pro_exp.png"
          stat1={
            <Fragment>
              <span className="about-text13">Leadership</span>
            </Fragment>
          }
          stat2={
            <Fragment>
              <span className="about-text14">Tool Selection</span>
            </Fragment>
          }
          stat3={
            <Fragment>
              <span className="about-text15">Data Integrety</span>
            </Fragment>
          }
          stat4={
            <Fragment>
              <span className="about-text16">Efficiency Focus</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text17">Professional Expertise</span>
            </Fragment>
          }
          stat1Description={
            <Fragment>
              <span className="about-text18">
                Over 3 years of experience as an RPA Lead Developer,
                spearheading automation initiatives.
              </span>
            </Fragment>
          }
          stat2Description={
            <Fragment>
              <span className="about-text19">
                Adept at evaluating and implementing automation tools to enhance
                business efficiency.
              </span>
            </Fragment>
          }
          stat3Description={
            <Fragment>
              <span className="about-text20">
                <span>
                  Skilled in maintaining data governance, and security across
                  automation workflows.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          stat4Description={
            <Fragment>
              <span className="about-text23">
                Committed to automating processes to eliminate inefficiencies
                and maximize productivity.
              </span>
            </Fragment>
          }
        ></Professional_Experience>
        <Key_Achievements
          s_sysAlt="s_sys"
          s_sysSrc="/s_sys.png"
          s_depAlt="s_dep"
          s_depSrc="/s_dep.png"
          t_colAlt="t_col"
          t_colSrc="/t_col.png"
          sectionTitle={
            <Fragment>
              <span className="about-text24">Key Achievements</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-text25">Streamlined Systems</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-text26">Seamless Deployment</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="about-text27">Team Collaboration</span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-text28">
                Designed and deployed automation solutions that streamlined
                operations and improved daily efficiency.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-text29">
                Developed deployment strategies that ensured smooth transitions
                to automated systems.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-text30">
                Collaborated with diverse teams to deliver unified solutions,
                addressing technical challenges proactively.
              </span>
            </Fragment>
          }
        ></Key_Achievements>
        <Technical_Skills
          p_langAlt="p_lang"
          p_langSrc="p_lang.png"
          d_protAlt="d_prot"
          d_protSrc="d_prot.png"
          t_framAlt="t_fram"
          t_framSrc="t_fram.png"
          text={
            <Fragment>
              <span className="about-text31">Technical Skills</span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-text32">Programming Languages</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-text33">Data Protocols</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="about-text34">Tools &amp; Frameworks</span>
            </Fragment>
          }
          rootClassName="features2root-class-name"
          feature1Description={
            <Fragment>
              <span className="about-text35">
                <span>Python</span>
                <br></br>
                <span>VBA</span>
                <br></br>
                <span>SQL</span>
                <br></br>
                <span>Powershell</span>
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-text43">
                <span>CSV</span>
                <br></br>
                <span>JSON</span>
                <br></br>
                <span>REST</span>
                <br></br>
                <span>XML</span>
                <br></br>
                <span>YAML</span>
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-text53">
                <span>Automation Anywhere</span>
                <br></br>
                <span>Microsoft SQL Server</span>
                <br></br>
                <span>Agile &amp; SCRUM methodologies.</span>
              </span>
            </Fragment>
          }
        ></Technical_Skills>
        <Education_And_Certifications
          cdbAlt="cdb"
          cdbSrc="cdb.png"
          bdcAlt="bdc"
          bdcSrc="bdc.png"
          ouAlt="ou"
          ouSrc="ou.png"
          wittAlt="witt"
          wittSrc="witt.png"
          sectionTitle={
            <Fragment>
              <span className="about-text59">
                Education &amp; Certifications
              </span>
            </Fragment>
          }
          feature1Title={
            <Fragment>
              <span className="about-text60">Bachelor&apos;s Degree</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="about-text61">Master&apos;s Degree</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="about-text62">
                Citizen Developer Certification
              </span>
            </Fragment>
          }
          feature4Title={
            <Fragment>
              <span className="about-text63">Bot Developer Certification</span>
            </Fragment>
          }
          sectionDescription={
            <Fragment>
              <span className="about-text64">
                Explore the key features of Apiary Connect
              </span>
            </Fragment>
          }
          feature1Description={
            <Fragment>
              <span className="about-text65">
                Earned a Bachelor’s in Actuarial Science from Ohio University in
                2017, complemented by a minor in Business Administration.
              </span>
            </Fragment>
          }
          feature2Description={
            <Fragment>
              <span className="about-text66">
                Graduated from Wittenberg University in 2020 with a degree in
                Data Analytics, focusing on data modeling and business
                intelligence.
              </span>
            </Fragment>
          }
          feature3Description={
            <Fragment>
              <span className="about-text67">
                <span>
                  Completed foundational training with Automation Anywhere in
                  2020, empowering non-developers to automate processes
                  effectively.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
          feature4Description={
            <Fragment>
              <span className="about-text70">
                Certified by Automation Anywhere in 2020, showcasing advanced
                skills in creating and implementing robotic process automation
                solutions.
              </span>
            </Fragment>
          }
        ></Education_And_Certifications>
        <CTA
          resdownloadURL="https://drive.google.com/uc?export=download&id=1Fgc70wo1idoNX7HYzZqAEpUzAUwwHHsy"
          emailseperateURL="mailto:nick@apiaryconnect.com"
          linkedinURL="https://linkedin.com/in/nick-breneman"
          action1={
            <Fragment>
              <span className="about-text71">Email Me</span>
            </Fragment>
          }
          action11={
            <Fragment>
              <span className="about-text72">My LinkedIn</span>
            </Fragment>
          }
          action12={
            <Fragment>
              <span className="about-text73">My Resume</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="about-text74">
                I’d love to hear from you! Whether you have questions, want to
                collaborate, or simply want to learn more about my work, feel
                free to reach out.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-text75">Let’s Connect!</span>
            </Fragment>
          }
        ></CTA>
        <Footer
          copyright={
            <Fragment>
              <span className="about-text76">
                © 2023 Apiary Connect. All Rights Reserved.
              </span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .about-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .about-text10 {
            display: inline-block;
          }
          .about-text11 {
            display: inline-block;
          }
          .about-text12 {
            display: inline-block;
          }
          .about-text13 {
            display: inline-block;
          }
          .about-text14 {
            display: inline-block;
          }
          .about-text15 {
            display: inline-block;
          }
          .about-text16 {
            display: inline-block;
          }
          .about-text17 {
            display: inline-block;
          }
          .about-text18 {
            display: inline-block;
          }
          .about-text19 {
            display: inline-block;
          }
          .about-text20 {
            display: inline-block;
          }
          .about-text23 {
            display: inline-block;
          }
          .about-text24 {
            display: inline-block;
          }
          .about-text25 {
            display: inline-block;
          }
          .about-text26 {
            display: inline-block;
          }
          .about-text27 {
            display: inline-block;
          }
          .about-text28 {
            display: inline-block;
          }
          .about-text29 {
            display: inline-block;
          }
          .about-text30 {
            display: inline-block;
          }
          .about-text31 {
            display: inline-block;
          }
          .about-text32 {
            display: inline-block;
          }
          .about-text33 {
            display: inline-block;
          }
          .about-text34 {
            display: inline-block;
          }
          .about-text35 {
            display: inline-block;
          }
          .about-text43 {
            display: inline-block;
          }
          .about-text53 {
            display: inline-block;
          }
          .about-text59 {
            display: inline-block;
          }
          .about-text60 {
            display: inline-block;
          }
          .about-text61 {
            display: inline-block;
          }
          .about-text62 {
            display: inline-block;
          }
          .about-text63 {
            display: inline-block;
          }
          .about-text64 {
            display: inline-block;
          }
          .about-text65 {
            display: inline-block;
          }
          .about-text66 {
            display: inline-block;
          }
          .about-text67 {
            display: inline-block;
          }
          .about-text70 {
            display: inline-block;
          }
          .about-text71 {
            display: inline-block;
          }
          .about-text72 {
            display: inline-block;
          }
          .about-text73 {
            display: inline-block;
          }
          .about-text74 {
            display: inline-block;
          }
          .about-text75 {
            display: inline-block;
          }
          .about-text76 {
            display: inline-block;
          }
        `}
      </style>
    </>
  );
};

export default About;
