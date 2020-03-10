import React from "react"
import Typist from 'react-typist';
import styled from 'styled-components';

import ProjectCard from '../components/projectCard';
import Button from '../components/button';
import Layout from "../components/layout";
import SEO from "../components/seo";
import Contact from '../components/contact';

import projects from '../components/projects';

const ProjectGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 500px) {
      grid-template-columns: 1fr;
  }
`
const JumboText = styled.span`
  font-size: 4rem;
  @media only screen and (max-width: 500px) {
      font-size: 3rem;
  }
`

const SubtitleText = styled.p`
  margin: 0;
  font-size: 2rem;

  @media only screen and (max-width: 500px) {
      font-size: 1.5rem;
  }
`;

const TypistContainer = styled.div`
  width: fit-content;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{display: 'flex', textAlign: 'left', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '95vh'}}>
      <TypistContainer>
        <JumboText>
          <Typist cursor={{hideWhenDone: true}}>
            <b>Hi, I'm <span style={{color: 'teal'}}>Hank</span></b>
          </Typist>
        </JumboText>
        <SubtitleText>
        <Typist startDelay='1500'>
          I make
          <span style={{color: 'teal'}}> applications
          <Typist.Backspace count={12} delay={200} />
          APIs
          <Typist.Backspace count={4} delay={200} />
          bots
          <Typist.Backspace count={4} delay={200} />
          stuff</span> on the internet
        </Typist>
        </SubtitleText>
        <Button onClick={() => {document.getElementById("projects").scrollIntoView({behavior: "smooth", block: 'center' })}}>My Projects</Button>
        <Button onClick={() => {document.getElementById("contact").scrollIntoView({behavior: "smooth", block: 'center' })}}>Contact</Button>
      </TypistContainer>
    </div>
    <div style={{minHeight: '90vh'}}>
      <h1 style={{borderBottom: '3px solid teal'}}>Projects</h1>
      <ProjectGrid id='projects'>
        {projects.map(project => 
          <ProjectCard project={project}/>  
        )}
      </ProjectGrid>
    </div>
    <div id='contact' style={{minHeight: '90vh'}}>
      <h1 style={{borderBottom: '3px solid teal'}}>Contact</h1>
      <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', fontSize: '2rem'}}>
        <Contact/>
      </div>
    </div>
  </Layout>
)

export default IndexPage
