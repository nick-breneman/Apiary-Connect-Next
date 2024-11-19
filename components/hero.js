import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Hero = (props) => {
  return (
    <>
      <div className="hero-header78">
        <div className="hero-column thq-section-max-width thq-section-padding">
          <div className="hero-content">
            <h1 className="hero-text10 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero-text19">
                    Medium length hero headline goes here
                  </span>
                </Fragment>
              )}
            </h1>
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="hero-image"
            />
            <p className="hero-text11 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero-text16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className="thq-button-filled button input hero-button1"
            >
              <span className="thq-body-small">
                {props.action1 ?? (
                  <Fragment>
                    <span className="hero-text18">Download PDF Resume</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="hero-button2 thq-button-outline">
              <span className="thq-body-small">
                {props.action2 ?? (
                  <Fragment>
                    <span className="hero-text15">Email Me</span>
                  </Fragment>
                )}
              </span>
            </button>
            <button className="hero-button3 thq-button-outline">
              <span className="thq-body-small">
                {props.action21 ?? (
                  <Fragment>
                    <span className="hero-text17">Visit LinkedIn Profile</span>
                  </Fragment>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-header78 {
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
          .hero-text10 {
            text-align: center;
          }
          .hero-image {
            width: 200px;
            object-fit: cover;
          }
          .hero-text11 {
            text-align: center;
          }
          .hero-actions {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
          }
          .hero-button2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-theme-primary1);
          }
          .hero-button3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            background-color: var(--dl-color-theme-primary1);
          }
          .hero-text15 {
            display: inline-block;
          }
          .hero-text16 {
            display: inline-block;
          }
          .hero-text17 {
            display: inline-block;
          }
          .hero-text18 {
            display: inline-block;
          }
          .hero-text19 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .hero-actions {
              width: 100%;
              flex-direction: column;
            }
            .hero-button1 {
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
  )
}

Hero.defaultProps = {
  action2: undefined,
  imageAlt1: 'image',
  imageSrc1: '/profile_pic-200h.png',
  content1: undefined,
  action21: undefined,
  imageSrc: 'a2d6d058-94fe-49d7-a275-02ffce9e1549',
  action1: undefined,
  heading1: undefined,
}

Hero.propTypes = {
  action2: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  content1: PropTypes.element,
  action21: PropTypes.element,
  imageSrc: PropTypes.string,
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero
