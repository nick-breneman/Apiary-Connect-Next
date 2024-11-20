import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Hero = (props) => {
  return (
    <>
      <div className="hero-header">
        <div className="hero-column thq-section-max-width thq-section-padding">
          <div className="hero-content">
            <h1 className="hero-text thq-heading-1">{props.heading}</h1>
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="hero-image"
            />
            <p className="hero-text thq-body-large">{props.content}</p>
          </div>
          <div className="hero-actions">
            <button
              className="hero-button thq-button-filled thq-button-animated"
              onClick={() => window.open(props.resdownloadURL, "_blank")}
            >
              <span className="thq-body-small">{props.action1}</span>
            </button>
            <button
              className="hero-button thq-button-filled thq-button-animated"
              onClick={() => window.open(props.emailseperateURL, "_blank")}
            >
              <span className="thq-body-small">{props.action2}</span>
            </button>
            <button
              className="hero-button thq-button-filled thq-button-animated"
              onClick={() => window.open(props.linkedinURL, "_blank")}
            >
              <span className="thq-body-small">{props.action3}</span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .hero-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero-text {
            text-align: center;
          }
          .hero-image {
            width: 200px;
            object-fit: cover;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-button {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-theme-primary1);
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button {
              width: 100%;
            }
            .hero-button2 {
              width: 100%;
            }
            .hero-button3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Hero;
