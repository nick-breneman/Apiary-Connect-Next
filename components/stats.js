import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const Stats = (props) => {
  return (
    <>
      <div className="stats-container1 thq-section-padding">
        <div className="stats-max-width thq-section-max-width">
          <div className="stats-container2 thq-flex-column">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-1-1 stats-image"
            />
          </div>
          <div className="stats-container3 thq-flex-column">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="stats-text19">Professional Expertise</span>
                </Fragment>
              )}
            </h2>
            <div className="stats-container4 thq-grid-2">
              <div className="stats-container5">
                <h2 className="thq-heading-2">
                  {props.stat1 ?? (
                    <Fragment>
                      <span className="stats-text27">Leadership</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat1Description ?? (
                    <Fragment>
                      <span className="stats-text23">
                        Over 3 years of experience as an RPA Lead Developer,
                        spearheading automation initiatives.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats-container6">
                <h2 className="thq-heading-2">
                  {props.stat2 ?? (
                    <Fragment>
                      <span className="stats-text22">Tool Selection</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat2Description ?? (
                    <Fragment>
                      <span className="stats-text20">
                        Adept at evaluating and implementing automation tools to
                        enhance business efficiency.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="stats-container7 thq-grid-2">
              <div className="stats-container8">
                <h2 className="thq-heading-2">
                  {props.stat3 ?? (
                    <Fragment>
                      <span className="stats-text26">Data Integrety</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat3Description ?? (
                    <Fragment>
                      <span className="stats-text24">
                        Skilled in maintaining data governance, and security
                        across automation workflows.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="stats-container9">
                <h2 className="thq-heading-2">
                  {props.stat4 ?? (
                    <Fragment>
                      <span className="stats-text25">Efficiency Focus</span>
                    </Fragment>
                  )}
                </h2>
                <span className="thq-body-small">
                  {props.stat4Description ?? (
                    <Fragment>
                      <span className="stats-text21">
                        Total number of visits to LinkedIn profiles of
                        professionals
                      </span>
                    </Fragment>
                  )}
                </span>
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
  )
}

Stats.defaultProps = {
  heading1: undefined,
  stat2Description: undefined,
  stat4Description: undefined,
  stat2: undefined,
  stat1Description: undefined,
  stat3Description: undefined,
  image1Alt: 'image',
  stat4: undefined,
  stat3: undefined,
  stat1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1549923746-9507eec27243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMTk2MTg5M3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Stats.propTypes = {
  heading1: PropTypes.element,
  stat2Description: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2: PropTypes.element,
  stat1Description: PropTypes.element,
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat4: PropTypes.element,
  stat3: PropTypes.element,
  stat1: PropTypes.element,
  image1Src: PropTypes.string,
}

export default Stats
