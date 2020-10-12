import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Subtitle } from './styles';
import WorkData from './work.json';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper as={Container} id="projects">
      <h2>Work</h2>
     
      <h3>Projects</h3>

      <Grid>
        {WorkData.projects.map((node) => (
          <Item as="div" key={node.title} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.title}</h4>
                <Subtitle>{node.subtitle}</Subtitle>
                <p>{node.description}</p>
              </Content>
              
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
