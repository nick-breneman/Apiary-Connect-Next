import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Education_And_Certifications = (props) => {
  return (
    <>
      <div className="features3-layout253 thq-section-padding">
        <div className="features3-content1 thq-flex-column">
          <h2 className="thq-heading-2">{props.sectionTitle}</h2>
          <p className="thq-body-large">{props.sectionDescription}</p>
        </div>
        <div className="features3-max-width thq-section-max-width thq-flex-row">
          <div className="features3-content2 thq-flex-column">
            <div className="features3-list thq-flex-row">
              <div className="thq-flex-column">
                <img
                  alt={props.cdbAlt}
                  src={props.cdbSrc}
                  className="features3-image1 thq-img-ratio-1-1 thq-img-round"
                />
                <div className="features3-content3 thq-flex-column">
                  <h3 className="features3-title11 thq-heading-3">
                    {props.feature3Title}
                  </h3>
                  <span className="features3-description11 thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
              <div className="thq-flex-column">
                <img
                  alt={props.bdcAlt}
                  src={props.bdcSrc}
                  className="thq-img-ratio-1-1 thq-img-round"
                />
                <div className="features3-content4 thq-flex-column">
                  <h3 className="features3-title12 thq-heading-3">
                    {props.feature4Title}
                  </h3>
                  <span className="features3-description12 thq-body-small">
                    {props.feature4Description}
                  </span>
                </div>
              </div>
              <div className="features3-list-item3 thq-flex-column">
                <img
                  alt={props.ouAlt}
                  src={props.ouSrc}
                  className="thq-img-ratio-1-1 thq-img-round"
                />
                <div className="features3-content5 thq-flex-column">
                  <h3 className="features3-title13 thq-heading-3">
                    {props.feature1Title}
                  </h3>
                  <span className="features3-description13 thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="thq-flex-column">
                <img
                  alt={props.wittAlt}
                  src={props.wittSrc}
                  className="thq-img-ratio-1-1 thq-img-round"
                />
                <div className="features3-content6 thq-flex-column">
                  <h3 className="features3-title14 thq-heading-3">
                    {props.feature2Title}
                  </h3>
                  <span className="features3-description14 thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features3-layout253 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .features3-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features3-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
          }
          .features3-content2 {
            flex: 1;
          }
          .features3-list {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features3-image1 {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
          }
          .features3-content3 {
            align-self: stretch;
          }
          .features3-title11 {
            text-align: center;
          }
          .features3-description11 {
            text-align: center;
          }
          .features3-content4 {
            align-self: stretch;
          }
          .features3-title12 {
            text-align: center;
          }
          .features3-description12 {
            text-align: center;
          }
          .features3-list-item3 {
            align-items: center;
          }
          .features3-content5 {
            align-self: stretch;
          }
          .features3-title13 {
            text-align: center;
          }
          .features3-description13 {
            text-align: center;
          }
          .features3-content6 {
            align-self: stretch;
          }
          .features3-title14 {
            text-align: center;
          }
          .features3-description14 {
            text-align: center;
          }
          .features3-text12 {
            display: inline-block;
          }
          .features3-text13 {
            display: inline-block;
          }
          .features3-text14 {
            display: inline-block;
          }
          .features3-text15 {
            display: inline-block;
          }
          .features3-text16 {
            display: inline-block;
          }
          .features3-text17 {
            display: inline-block;
          }
          .features3-text18 {
            display: inline-block;
          }
          .features3-text19 {
            display: inline-block;
          }
          .features3-text20 {
            display: inline-block;
          }
          .features3-text21 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features3-layout253 {
              flex-direction: column;
            }
            .features3-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .features3-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .features3-list {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Education_And_Certifications;
