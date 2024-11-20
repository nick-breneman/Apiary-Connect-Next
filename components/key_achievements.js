import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Key_Achievements = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle}
              </h2>
            </div>
          </div>
          <div className="features1-content1">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.s_sysAlt}
                  src={props.s_sysSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature1Title}</h3>
                  <span className="thq-body-small">
                    {props.feature1Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.s_depAlt}
                  src={props.s_depSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature2Title}</h3>
                  <span className="thq-body-small">
                    {props.feature2Description}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.t_colAlt}
                  src={props.t_colSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content4 thq-flex-column">
                  <h3 className="thq-heading-3">{props.feature3Title}</h3>
                  <span className="thq-body-small">
                    {props.feature3Description}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="features1-actions"></div>
        </div>
      </div>
      <style jsx>
        {`
          .features1-layout251 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features1-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-column {
            gap: var(--dl-space-space-halfunit);
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features1-content1 {
            gap: 48px;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .features1-row {
            align-items: flex-start;
          }
          .features1-feature1 {
            flex: 1;
          }
          .features1-content2 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature2 {
            flex: 1;
          }
          .features1-content3 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-feature3 {
            flex: 1;
          }
          .features1-content4 {
            align-self: stretch;
            align-items: flex-start;
          }
          .features1-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .features1-text2 {
            display: inline-block;
          }
          .features1-text3 {
            display: inline-block;
          }
          .features1-text4 {
            display: inline-block;
          }
          .features1-text5 {
            display: inline-block;
          }
          .features1-text6 {
            display: inline-block;
          }
          .features1-text7 {
            display: inline-block;
          }
          .features1-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features1-section-title {
              align-items: flex-start;
              flex-direction: column;
            }
            .features1-feature1-image {
              height: 260px;
            }
            .features1-feature2-image {
              height: 260px;
            }
            .features1-feature3-image {
              height: 260px;
            }
          }
          @media (max-width: 767px) {
            .features1-column {
              width: 100%;
            }
            .features1-text1 {
              text-align: center;
            }
            .features1-row {
              flex-direction: column;
            }
            .features1-feature1-image {
              width: 100%;
            }
            .features1-feature2 {
              width: auto;
            }
            .features1-feature2-image {
              width: 100%;
            }
            .features1-feature3 {
              width: auto;
            }
            .features1-actions {
              flex-wrap: wrap;
            }
          }
          @media (max-width: 479px) {
            .features1-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default Key_Achievements;
