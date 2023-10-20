import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import "../styles/global.css";

export default function Footer() {
    const footerdata = useStaticQuery(graphql`
    query MyQuerys {
    site {
      siteMetadata {
        copyright
      }
    }
  }
    `)  
    const { copyright } = footerdata.site.siteMetadata
  return (
    <div className='text-center'>{copyright}</div>
  )
}
