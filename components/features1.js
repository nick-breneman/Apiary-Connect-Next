import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Features1 = (props) => {
  return (
    <>
      <div className="features1-layout251 thq-section-padding">
        <div className="features1-max-width thq-section-max-width">
          <div className="thq-flex-row features1-section-title">
            <div className="features1-column thq-flex-column">
              <h2 className="thq-heading-2 features1-text1">
                {props.sectionTitle ?? (
                  <Fragment>
                    <span className="features1-text4">Key Features</span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div className="features1-content1">
            <div className="features1-row thq-flex-row">
              <div className="features1-feature1 thq-flex-column">
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature1-image"
                />
                <div className="features1-content2 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features1-text7">
                          Customizable Templates
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features1-text3">
                          Choose from a variety of professionally designed
                          templates to create a unique resume that suits your
                          style.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature2 thq-flex-column">
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature2-image"
                />
                <div className="features1-content3 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features1-text8">Easy Contact</span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features1-text5">
                          Connect with resume owners directly by sending them an
                          email or visiting their LinkedIn profile with just a
                          click.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="features1-feature3 thq-flex-column">
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  className="thq-img-ratio-4-3 features1-feature3-image"
                />
                <div className="features1-content4 thq-flex-column">
                  <h3 className="thq-heading-3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features1-text2">
                          Share Your Story
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="thq-body-small">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features1-text6">
                          Share your resume effortlessly with potential
                          employers, recruiters, or your network to enhance your
                          professional presence.
                        </span>
                      </Fragment>
                    )}
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
  )
}

Features1.defaultProps = {
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1507296899168-efd2ba7c5d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk2MTg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Customizable Templates Image',
  feature3Title: undefined,
  feature1Description: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1461710727236-2366afa21725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk2MTg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  sectionTitle: undefined,
  feature2Description: undefined,
  feature2ImageAlt: 'Easy Contact Image',
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1706759755831-bbbcca338f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk2MTg5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description: undefined,
  feature3ImageAlt: 'Share Your Story Image',
  feature1Title: undefined,
  feature2Title: undefined,
}

Features1.propTypes = {
  feature2ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature1Description: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2Title: PropTypes.element,
}

export default Features1
