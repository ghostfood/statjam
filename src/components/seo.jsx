import React from "react"
import PropTypes from "prop-types"

// Minimal SEO component: removed Gatsby useStaticQuery/GraphQL dependency.
// For Astro pages prefer setting head/meta inside .astro files; this is a
// lightweight no-op React component kept for compatibility.
function SEO({ description, lang, meta, title }) {
  // No Gatsby siteMetadata available here; Astro pages should manage head.
  return null
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
