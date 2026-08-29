import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, siteTitle = "Statjam" }) => {
  return (
    <>
    <Header
      siteTitle={siteTitle}
      description="Fast facts for fuller findings. Collections of data for greater convenience and deeper analysis."
      keywords="glance, guide, data, table, information, statistics, visual, reference"
    />
  <main>{children}</main>
    <footer className="d-flex flex-column justify-content-center align-items-center shade-50">
      <div className="d-flex flex-column w-100 container container-xl">
        <div className="row">
          <div className="col-12 align-center">
            <div className="d-flex justify-content-center">
              <a href="http://ghostfood.uk" className="d-flex flex-column align-center align-inline" title="Go to ghostfood.uk">
                <img src="/img/icon-ghostfood.png" height="40" width="40" className="d-flex align-center rounded-circle p-1 swing" alt="Ghost Food logo" />
                <div className="align-center pas brsm text-up1">A Ghost Food production</div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="align-center text-sm text-fainter">
        © {new Date().getFullYear()}, Built with Astro
      </div>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
