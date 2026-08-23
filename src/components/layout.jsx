import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, siteTitle = "Statjam" }) => {
  return (
    <>
      <Header siteTitle={siteTitle} />
        <main>{children}</main>
        <footer class="d-flex justify-content-center align-items-center">
          © {new Date().getFullYear()}, Built with Astro
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
