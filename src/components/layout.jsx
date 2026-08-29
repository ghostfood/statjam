import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, siteTitle = "Statjam" }) => {
  return (
    <>
    <Header siteTitle={siteTitle} />
  <main>{children}</main>
    <footer className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column w-100 container container-xl my-3">
        <div className="row">
          <div className="col-12 align-center">
            <div className="d-flex justify-content-center">
              <a href="http://ghostfood.uk" className="d-flex flex-column align-center align-inline" title="Go to ghostfood.uk">
                <img src="/img/icon-ghostfood.png" height="40" width="40" className="swing d-flex align-center rounded-circle my-2 p-1" alt="Ghost Food logo" />
                <div className="align-center small">A Ghost Food production</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      © {new Date().getFullYear()}, Built with Astro
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
