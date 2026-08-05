import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: `description`, content: data.site.siteMetadata.description },
              { name: `keywords`, content: `ian hundere, devops, sre, platform engineer, software supply-chain security, sigstore, slsa, cloud infrastructure, portfolio` },
              { property: `og:title`, content: data.site.siteMetadata.title },
              { property: `og:description`, content: data.site.siteMetadata.description },
              { property: `og:type`, content: `website` },
              { property: `og:url`, content: data.site.siteMetadata.siteUrl },
              { name: `twitter:card`, content: `summary` },
            ]}
          >
            <html lang="en" />
            <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
