import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Mynavbar() {
  const data = useStaticQuery(graphql`
  query MyQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
  `)  
  const { title } = data.site.siteMetadata
  return (
    <div className='nav-links'>
        <h6>{ title }</h6>
        <Link to='/' className='links-nav-list'>Home</Link>
        <Link to='/about' className='links-nav-list'>About</Link>
        <Link to='/projects' className='links-nav-list'>Portfolio</Link>
    </div>
  )
}
