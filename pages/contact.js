import React, { Fragment } from "react";
import Head from "next/head";

import Navbar from "../components/navbar";
import ContactForm from "../components/contact-form";
import Footer from "../components/footer";

const Contact = (props) => {
  return (
    <>
      <div className="contact-container">
        <Head>
          <title>Contact - Apiary Connect</title>
          <meta property="og:title" content="Contact - Apiary Connect" />
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
        <ContactForm
          email={
            <Fragment>
              <span className="contact-text">nick@apiaryconnect.com</span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="contact-text">+1 (937) 474-1113</span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="contact-text">Send</span>
            </Fragment>
          }
          address={
            <Fragment>
              <span className="contact-text">Columbus, OH</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text">
                <span>
                  Feel free to reach out to me for any inquiries or
                  opportunities.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: " ",
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text">
                I look forward to connecting with you.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text">Contact Information</span>
            </Fragment>
          }
        ></ContactForm>
        <Footer
          copyright={
            <Fragment>
              <span className="contact-text">
                © 2023 Apiary Connect. All Rights Reserved.
              </span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .contact-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .contact-text {
            display: inline-block;
          }
        `}
      </style>
    </>
  );
};

export default Contact;
