import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Features2 = (props) => {
  return (
    <>
      <div
        className={`features2-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <h2 className="features2-text10 thq-heading-2">{props.text}</h2>
        <div className="features2-max-width thq-section-max-width thq-grid-auto-300">
          <div className="features2-pdfcont thq-flex-column thq-card">
            <img
              alt={props.techskills1Alt}
              src={props.techskills1Src}
              className="features2-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature1Title}</h2>
            <span className="features2-text12 thq-body-small">
              {props.feature1Description}
            </span>
          </div>
          <div className="features2-emailcont thq-flex-column thq-card">
            <img
              alt={props.techskills2Alt}
              src={props.techskills2Src}
              className="features2-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature2Title}</h2>
            <span className="features2-text14 thq-body-small">
              {props.feature2Description}
            </span>
          </div>
          <div className="features2l-icont thq-flex-column thq-card">
            <img
              alt={props.techskills3Alt}
              src={props.techskills3Src}
              className="features2-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">{props.feature3Title}</h2>
            <span className="features2-text16 thq-body-small">
              {props.feature3Description}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features2-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .features2-text10 {
            align-self: flex-start;
          }
          .features2-max-width {
            display: flex;
            align-items: center;
          }
          .features2-pdfcont {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features2-image1 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features2-text12 {
            text-align: center;
          }
          .features2-emailcont {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary2);
          }
          .features2-image2 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features2-text14 {
            text-align: center;
          }
          .features2l-icont {
            color: var(--dl-color-theme-neutral-light);
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .features2-image3 {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .features2-text16 {
            text-align: center;
          }
          .features2-text17 {
            display: inline-block;
          }
          .features2-text18 {
            display: inline-block;
          }
          .features2-text19 {
            display: inline-block;
          }
          .features2-text20 {
            display: inline-block;
          }
          .features2-text21 {
            display: inline-block;
          }
          .features2-text22 {
            display: inline-block;
          }
          .features2-text23 {
            display: inline-block;
          }
          .features2root-class-name {
            align-self: center;
          }
          @media (max-width: 991px) {
            .features2-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .features2-text10 {
              text-align: center;
            }
            .features2-pdfcont {
              width: 100%;
            }
            .features2-emailcont {
              width: 100%;
            }
            .features2l-icont {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

Features2.defaultProps = {
  rootClassName: "",
  feature2Title: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
  text: undefined,
  feature3Title: undefined,
  feature2Description: undefined,
  feature3Description: undefined,
};

Features2.propTypes = {
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  text: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
};

export default Features2;
