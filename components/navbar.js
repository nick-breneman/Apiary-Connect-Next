import React, { useState, Fragment } from "react";

import PropTypes from "prop-types";

const Navbar = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false);
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false);
  return (
    <>
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            className="navbar-image"
            src={props.logoSrc}
            alt={props.logoAlt}
            onClick={() => window.open(props.homeURL)}
            //onClick={() => (window.location.href = props.homeURL)}
          />
          <h1 className="navbar-text">{props.heading}</h1>
          <div className="navbar-buttons">
            <button
              className="navbar-action thq-button-filled thq-button-animated"
              onClick={() => window.open(props.aboutmeURL)}
              //onClick={() => (window.location.href = props.aboutmeURL)}
            >
              <span>About Me</span>
            </button>
            <button
              className="navbar-action thq-button-filled thq-button-animated"
              onClick={() => window.open(props.contactURL)}
              //onClick={() => (window.location.href = props.contactURL)}
            >
              <span>Contact Me</span>
            </button>
          </div>
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu"></div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu"></div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-image {
            height: 3rem;
          }
          .navbar-text {
            width: 863px;
            height: 36px;
            margin-left: 30px;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar-action {
            display: flex;
            flex-direction: row;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  );
};

Navbar.defaultProps = {
  heading: undefined,
  logoSrc: "/Logo.png",
  logoAlt: "My Logo",
  aboutmeURL: undefined,
  contactURL: undefined,
  homeURL: undefined,
};

Navbar.propTypes = {
  heading: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  aboutmeURL: PropTypes.string,
  contactURL: PropTypes.string,
  homeURL: PropTypes.string,
};

export default Navbar;
