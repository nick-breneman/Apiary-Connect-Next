import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const CTA = (props) => {
  return (
    <>
      <div className="cta-container1 thq-section-padding">
        <div className="cta-max-width thq-section-max-width">
          <div className="cta-content">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="cta-text7">Join Apiary Connect today!</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="cta-text5">
                    Start connecting with professionals and sharing resumes
                    effortlessly.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="cta-container2">
              <div className="cta-row thq-flex-column">
                <div className="cta-container3">
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.action1 ?? (
                        <Fragment>
                          <span className="cta-text4">Sign Up</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.action12 ?? (
                        <Fragment>
                          <span className="cta-text8">Sign Up</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button type="button" className="thq-button-filled">
                    <span>
                      {props.action11 ?? (
                        <Fragment>
                          <span className="cta-text6">Sign Up</span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .cta-container1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            overflow: hidden;
            position: relative;
            flex-direction: column;
          }
          .cta-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .cta-content {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .cta-container2 {
            gap: var(--dl-space-space-unit);
            flex: 1;
            width: auto;
            display: flex;
            flex-direction: column;
          }
          .cta-row {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .cta-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            justify-content: center;
          }
          .cta-text4 {
            display: inline-block;
          }
          .cta-text5 {
            display: inline-block;
          }
          .cta-text6 {
            display: inline-block;
          }
          .cta-text7 {
            display: inline-block;
          }
          .cta-text8 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .cta-container2 {
              width: auto;
              align-items: flex-start;
            }
            .cta-row {
              width: 100%;
              position: relative;
              flex-direction: row;
              justify-content: flex-start;
            }
            .cta-container3 {
              align-self: flex-end;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .cta-container2 {
              gap: var(--dl-space-space-unit);
            }
            .cta-row {
              align-self: flex-start;
            }
            .cta-container3 {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

CTA.defaultProps = {
  action1: undefined,
  content1: undefined,
  action11: undefined,
  heading1: undefined,
  action12: undefined,
}

CTA.propTypes = {
  action1: PropTypes.element,
  content1: PropTypes.element,
  action11: PropTypes.element,
  heading1: PropTypes.element,
  action12: PropTypes.element,
}

export default CTA
