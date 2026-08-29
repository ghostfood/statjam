import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="shade-25">
    <div className="container container-xl d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col-12 align-center">
          <a href="/" className="text-up1 text-faint">
          <span className="d-none">{siteTitle}</span>S T A T J A M . O R G
          </a>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
