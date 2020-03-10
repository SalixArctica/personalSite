/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from 'styled-components'

import Header from "./header"
import "./layout.css"

const FooterContainer = styled.footer`
    width: 100%;
    background: dimgray;
    color: white;
    margin-bottom: 0;
    position: fixed;
    bottom: 0;
    & > div {
        font-size: 1.5rem;
        padding: 1rem 0;
        
        margin: 0rem 10vw;
    }
    
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={{main: 'pink'}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          flexGrow: 1,
        }}
      >
        <main>{children}</main>
      </div>
      <FooterContainer>
        </FooterContainer>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
