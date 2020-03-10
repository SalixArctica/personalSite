import React from 'react'
import styled, { keyframes } from 'styled-components'

const scrollup = keyframes`
  from {
    margin-top: 5rem;
  }

  to {
    margin-top: 1rem;
  }
`;

const ProjectCard = styled.div`
    border: 1px solid lightgrey; 
    margin: 1rem; 
    padding: 0;
`

export default (props) => {
    return (
          <ProjectCard>
              <p style={{borderBottom: '1px solid lightgrey', padding: '1rem 1rem 0 1rem', margin: '0', background: 'teal', color: 'white'}}>{props.project.name}</p>
              <div style={{margin: '0 1rem'}}>
              <p>{props.project.live ? (<a href={props.project.live}>live</a>) : ''}{props.project.live && props.project.repo ? ' | ' : ''}{props.project.repo ?<a href={props.project.repo}>repo</a> : ''}</p>
              <p>{props.project.description}</p>
              </div>
          </ProjectCard>
    )
}