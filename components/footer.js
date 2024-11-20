import React, { Fragment } from "react";

import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <footer
        className={`footer-container thq-section-padding ${props.rootClassName} `}
      >
        <div className="footer-max-width thq-section-max-width">
          <div className="thq-divider-horizontal"></div>
          <div className="footer-credits1">
            <div className="footer-row">
              <div className="footer-credits2">
                <span className="thq-body-small">{props.copyright}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer-max-width {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-credits1 {
            width: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-row {
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer-credits2 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .footer-text {
            display: inline-block;
          }

          @media (max-width: 767px) {
            .footer-row {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .footer-credits2 {
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer-credits1 {
              gap: 0;
            }
            .footer-row {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

Footer.defaultProps = {
  rootClassName: "",
  copyright: undefined,
};

Footer.propTypes = {
  rootClassName: PropTypes.string,
  copyright: PropTypes.element,
};

export default Footer;
