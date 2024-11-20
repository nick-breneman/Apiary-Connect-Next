import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Hero2 = (props) => {
  return (
    <>
      <div className="hero2-header26 thq-section-padding">
        <div className="hero2-max-width thq-section-max-width thq-flex-column">
          <div className="hero2-column">
            <div className="hero2-content">
              <h1 className="hero2-text1 thq-heading-1">{props.heading1}</h1>
              <p className="hero2-text2 thq-body-large">{props.content1}</p>
              <div className="hero2-actions"></div>
            </div>
          </div>
          <img
            alt={props.hero2imageAlt}
            src={props.hero2imageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero2-header26 {
            gap: var(--dl-space-space-twounits);
          }
          .hero2-max-width {
            align-self: center;
          }
          .hero2-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero2-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero2-text1 {
            text-align: center;
          }
          .hero2-text2 {
            text-align: center;
          }
          .hero2-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero2-text3 {
            display: inline-block;
          }
          .hero2-text4 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero2-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

Hero2.defaultProps = {
  heading1: undefined,
  image1Src: undefined,
  content1: undefined,
  image1Alt: undefined,
};

Hero2.propTypes = {
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  image1Alt: PropTypes.string,
};

export default Hero2;
