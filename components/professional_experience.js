import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Professional_Experience = (props) => {
  return (
    <>
      <div className="stats-container1 thq-section-padding">
        <div className="stats-max-width thq-section-max-width">
          <div className="stats-container2 thq-flex-column">
            <img
              alt={props.pro_expAlt}
              src={props.pro_expSrc}
              className="thq-img-ratio-1-1 stats-image"
            />
          </div>
          <div className="stats-container3 thq-flex-column">
            <h2 className="thq-heading-2">{props.heading1}</h2>
            <div className="stats-container4 thq-grid-2">
              <div className="stats-container5">
                <h2 className="thq-heading-2">{props.stat1}</h2>
                <span className="thq-body-small">{props.stat1Description}</span>
              </div>
              <div className="stats-container6">
                <h2 className="thq-heading-2">{props.stat2}</h2>
                <span className="thq-body-small">{props.stat2Description}</span>
              </div>
            </div>
            <div className="stats-container7 thq-grid-2">
              <div className="stats-container8">
                <h2 className="thq-heading-2">{props.stat3}</h2>
                <span className="thq-body-small">{props.stat3Description}</span>
              </div>
              <div className="stats-container9">
                <h2 className="thq-heading-2">{props.stat4}</h2>
                <span className="thq-body-small">{props.stat4Description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .stats-container1 {
            width: 100%;
            flex-direction: column;
          }
          .stats-max-width {
            gap: var(--dl-space-space-fourunits);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
          }
          .stats-container2 {
            max-width: 50%;
          }
          .stats-container3 {
            align-self: center;
            align-items: flex-start;
            margin-left: auto;
          }
          .stats-container4 {
            width: 100%;
          }
          .stats-container5 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container6 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container7 {
            width: 100%;
          }
          .stats-container8 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-container9 {
            width: 100%;
            height: 100%;
            align-items: flex-start;
          }
          .stats-text19 {
            display: inline-block;
          }
          .stats-text20 {
            display: inline-block;
          }
          .stats-text21 {
            display: inline-block;
          }
          .stats-text22 {
            display: inline-block;
          }
          .stats-text23 {
            display: inline-block;
          }
          .stats-text24 {
            display: inline-block;
          }
          .stats-text25 {
            display: inline-block;
          }
          .stats-text26 {
            display: inline-block;
          }
          .stats-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .stats-max-width {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column;
            }
            .stats-container2 {
              width: 100%;
              max-width: 100%;
            }
            .stats-container3 {
              align-self: flex-start;
              margin-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .stats-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Professional_Experience;
