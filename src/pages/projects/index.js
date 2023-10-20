import React from 'react'
import Mylayout from '../../components/Mylayout'
import { Link, graphql } from 'gatsby'
import * as styles from '../../styles/project.module.css'; // Use "import * as styles" instead of "import styles"


export default function index({data}) {
  console.log(data);
  const projects = data.allMarkdownRemark.nodes

  return (
    <Mylayout>
    <div>This is my portfolio center content</div>
    <div className={styles.projects}>
      {projects.map(project => (
        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
          <div>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>

        </Link>
      ))}
    </div>
    </Mylayout>
  )
}

// export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
        stack
        title
      }
      id
    }
  }
}
`
