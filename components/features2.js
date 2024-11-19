import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Features2 = (props) => {
  return (
    <>
      <div
        className={`features2-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <h2 className="features2-text10 thq-heading-2">
          {props.text ?? (
            <Fragment>
              <span className="features2-text20">
                Education &amp; Certifications
              </span>
            </Fragment>
          )}
        </h2>
        <div className="features2-max-width thq-section-max-width thq-grid-auto-300">
          <div className="features2-pdfcont thq-flex-column thq-card">
            <img
              alt={props.feature1ImageAlt}
              src={props.feature1ImageSrc}
              className="features2-image1 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature1Title ?? (
                <Fragment>
                  <span className="features2-text19">Download PDF Resumes</span>
                </Fragment>
              )}
            </h2>
            <span className="features2-text12 thq-body-small">
              {props.feature1Description ?? (
                <Fragment>
                  <span className="features2-text18">
                    Easily download PDF resumes of professionals you connect
                    with.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features2-emailcont thq-flex-column thq-card">
            <img
              alt={props.feature2ImageAlt}
              src={props.feature2ImageSrc}
              className="features2-image2 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature2Title ?? (
                <Fragment>
                  <span className="features2-text17">Contact via Email</span>
                </Fragment>
              )}
            </h2>
            <span className="features2-text14 thq-body-small">
              {props.feature2Description ?? (
                <Fragment>
                  <span className="features2-text22">
                    Reach out to professionals directly by email through our
                    platform.
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="features2l-icont thq-flex-column thq-card">
            <img
              alt={props.feature3ImageAlt}
              src={props.feature3ImageSrc}
              className="features2-image3 thq-img-ratio-1-1 thq-img-round"
            />
            <h2 className="thq-heading-2">
              {props.feature3Title ?? (
                <Fragment>
                  <span className="features2-text21">
                    Visit LinkedIn Profiles
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="features2-text16 thq-body-small">
              {props.feature3Description ?? (
                <Fragment>
                  <span className="features2-text23">
                    Explore the professional background of users by visiting
                    their LinkedIn profiles.
                  </span>
                </Fragment>
              )}
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
  )
}

Features2.defaultProps = {
  rootClassName: '',
  feature2Title: undefined,
  feature1Description: undefined,
  feature1Title: undefined,
  text: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1549923746-c502d488b3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk3MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1524635962361-d7f8ae9c79b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk3MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature1ImageAlt: 'Download PDF Resumes Image',
  feature2Description: undefined,
  feature3ImageAlt: 'Visit LinkedIn Profiles Image',
  feature2ImageAlt: 'Contact via Email Image',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1507296899168-efd2ba7c5d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk3MDU2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
}

Features2.propTypes = {
  rootClassName: PropTypes.string,
  feature2Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  text: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1ImageAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
}

export default Features2
