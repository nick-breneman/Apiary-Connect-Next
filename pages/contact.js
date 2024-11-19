import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

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
              <span className="contact-text10">Apiary Connect</span>
            </Fragment>
          }
          logoSrc="/apiaryconnect_logo_nobackground-1500h.png"
        ></Navbar>
        <ContactForm
          email={
            <Fragment>
              <span className="contact-text11">nick@apiaryconnect.com</span>
            </Fragment>
          }
          phone={
            <Fragment>
              <span className="contact-text12">+1 (937) 474-1113</span>
            </Fragment>
          }
          action={
            <Fragment>
              <span className="contact-text13">Contact Me</span>
            </Fragment>
          }
          address={
            <Fragment>
              <span className="contact-text14">Columbus, OH</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="contact-text15">
                <span>
                  Feel free to reach out to me for any inquiries or
                  opportunities.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </Fragment>
          }
          content2={
            <Fragment>
              <span className="contact-text18">
                I look forward to connecting with you.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="contact-text19">Contact Information</span>
            </Fragment>
          }
        ></ContactForm>
        <Footer
          copyright={
            <Fragment>
              <span className="contact-text20">
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
          .contact-text10 {
            display: inline-block;
          }
          .contact-text11 {
            display: inline-block;
          }
          .contact-text12 {
            display: inline-block;
          }
          .contact-text13 {
            display: inline-block;
          }
          .contact-text14 {
            display: inline-block;
          }
          .contact-text15 {
            display: inline-block;
          }
          .contact-text18 {
            display: inline-block;
          }
          .contact-text19 {
            display: inline-block;
          }
          .contact-text20 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Contact
