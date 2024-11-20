import React, { Fragment } from "react";

import PropTypes from "prop-types";

const ContactForm = (props) => {
  return (
    <>
      <div className="contact-form-contact1 thq-section-padding">
        <div className="contact-form-max-width thq-section-max-width thq-flex-row">
          <div className="contact-form-section-title thq-flex-column">
            <span className="thq-body-small">{props.content2}</span>
            <div className="contact-form-content1">
              <h2 className="thq-heading-2">{props.heading1}</h2>
              <span className="thq-body-small contact-form-text">
                {props.content1}
              </span>
            </div>
            <div className="contact-form-content2">
              <div className="contact-form-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span className="thq-body-small">{props.email}</span>
              </div>
              <div className="contact-form-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                </svg>
                <span className="thq-body-small">{props.phone}</span>
              </div>
              <div className="contact-form-row">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="thq-body-small">{props.address}</span>
              </div>
            </div>
          </div>
          <form
            id="contact-form"
            method="POST"
            action="sendmail.php"
            className="contact-form-form thq-flex-column"
          >
            <div className="contact-form-container1">
              <div className="contact-form-input">
                <label
                  htmlFor="contact-form-7-first-name"
                  className="thq-body-small"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="contact-form-7-first-name"
                  placeholder="First Name"
                  className="thq-input"
                  name="first_name"
                />
              </div>
              <div className="contact-form-input">
                <label
                  htmlFor="contact-form-7-last-name"
                  className="thq-body-small"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="contact-form-7-last-name"
                  placeholder="Last Name"
                  className="thq-input"
                  name="last_name"
                />
              </div>
            </div>
            <div className="contact-form-container1">
              <div className="contact-form-input">
                <label
                  htmlFor="contact-form-7-email"
                  className="thq-body-small"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contact-form-7-email"
                  required="true"
                  placeholder="Email"
                  className="thq-input"
                  name="email"
                />
              </div>
              <div className="contact-form-input">
                <label
                  htmlFor="contact-form-7-phone"
                  className="thq-body-small"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="contact-form-7-phone"
                  placeholder="Phone Number"
                  className="thq-input"
                  name="number"
                />
              </div>
            </div>
            <div className="contact-form-container2">
              <div className="contact-form-input">
                <label
                  htmlFor="contact-form-7-message"
                  className="thq-body-small"
                >
                  Message
                </label>
                <textarea
                  id="contact-form-7-message"
                  rows="3"
                  placeholder="Enter your message"
                  className="thq-input"
                  name="message"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="contact-form-button thq-button-filled"
            >
              <span className="thq-body-small">{props.action}</span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .contact-form-contact1 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-form-max-width {
            align-items: flex-start;
          }
          .contact-form-section-title {
            gap: var(--dl-space-space-unit);
            width: 40%;
            align-items: flex-start;
          }
          .contact-form-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            flex-direction: column;
          }
          .contact-form-content2 {
            gap: 16px;
            display: flex;
            padding: 8px 0;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-row {
            gap: 16px;
            display: flex;
            align-items: flex-start;
          }
          .contact-form-form {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 60%;
          }
          .contact-form-input {
            gap: var(--dl-space-space-halfunit);
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-container1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .contact-form-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-form-button {
            align-self: flex-start;
          }
          .contact-form-text {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .contact-form-max-width {
              align-items: flex-start;
              flex-direction: column;
            }
            .contact-form-section-title {
              width: 100%;
            }
            .contact-form-form {
              width: 100%;
            }
            .contact-form-container1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form-input {
              width: 50%;
            }
            .contact-form-input2 {
              width: 50%;
              flex-direction: column;
            }
            .contact-form-container2 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              flex-direction: row;
            }
            .contact-form-input3 {
              width: 50%;
            }
            .contact-form-input4 {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .contact-form-text {
              text-align: center;
            }
            .contact-form-form {
              padding: var(--dl-space-space-unit);
            }
            .contact-form-container1 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form-input {
              width: 100%;
            }
            .contact-form-input2 {
              width: 100%;
            }
            .contact-form-container2 {
              align-items: stretch;
              flex-direction: column;
            }
            .contact-form-input3 {
              width: 100%;
            }
            .contact-form-input4 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

ContactForm.defaultProps = {
  content2: undefined,
  phone: undefined,
  content1: undefined,
  heading1: undefined,
  address: undefined,
  email: undefined,
  action: undefined,
};

ContactForm.propTypes = {
  content2: PropTypes.element,
  phone: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  address: PropTypes.element,
  email: PropTypes.element,
  action: PropTypes.element,
};

export default ContactForm;
