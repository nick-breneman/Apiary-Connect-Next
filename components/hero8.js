import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero8 = (props) => {
  return (
    <>
      <div className="hero8-header26 thq-section-padding">
        <div className="hero8-max-width thq-section-max-width thq-flex-column">
          <div className="hero8-column">
            <div className="hero8-content">
              <h1 className="hero8-text1 thq-heading-1">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="hero8-text8">
                      Build Your Professional Network
                    </span>
                  </Fragment>
                )}
              </h1>
              <p className="hero8-text2 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="hero8-text5">
                      Connect with industry professionals, exchange ideas, and
                      explore career opportunities.
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="hero8-actions">
                <button className="thq-button-filled hero8-button1">
                  <span className="thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="hero8-text6">Sign Up Now</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline hero8-button2">
                  <span className="thq-body-small">
                    {props.action2 ?? (
                      <Fragment>
                        <span className="hero8-text7">Learn More</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
      <style jsx>
        {`
          .hero8-header26 {
            gap: var(--dl-space-space-twounits);
          }
          .hero8-max-width {
            align-self: center;
          }
          .hero8-column {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .hero8-content {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero8-text1 {
            text-align: center;
          }
          .hero8-text2 {
            text-align: center;
          }
          .hero8-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
          }
          .hero8-text5 {
            display: inline-block;
          }
          .hero8-text6 {
            display: inline-block;
          }
          .hero8-text7 {
            display: inline-block;
          }
          .hero8-text8 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero8-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero8-button1 {
              width: 100%;
            }
            .hero8-button2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  action1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1553484771-898ed465e931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk2MTQ5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  action2: undefined,
  heading1: undefined,
  image1Alt: 'Professional Networking',
}

Hero8.propTypes = {
  content1: PropTypes.element,
  action1: PropTypes.element,
  image1Src: PropTypes.string,
  action2: PropTypes.element,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
}

export default Hero8
