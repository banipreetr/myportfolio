import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import { Link } from 'gatsby';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Banipreet and I’m a final year student at IIT (ISM) Dhanbad!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            <small>
              I am a student of the final year in Dual Degree (B.Tech + M. Tech) in Computer Science and Engineering at the <a href='https://www.iitism.ac.in/' target="_blank">Indian Institute of Technology (Indian School of Mines) Dhanbad</a>.
              I am largely self-taught and have focused heavily on online resources as well as hands-on implementation to pursue my dream of becoming a successful Software Engineer. 
              I have recently completed my summer internship as a Software Engineer Intern at <a href="https://www.techatbloomberg.com/" target="_blank">Bloomberg</a>, , and currently I am interning as a Member of Technical Staff at  <a href="https://www.nutanix.com/theforecastbynutanix/technology" target="_blank">Nutanix</a>.
            </small>
          </p>
          <p>
            <small>
            My domain of interests includes Competitive Programming, Object-Oriented Designing, Deep Learning, Computer Vision, Machine Learning, and Data Analytics. 
            Apart from this, I like to spend my free time in participating in Competitive Programming contests at <a href="https://codeforces.com/" target="_blank">Codeforces</a>, solving problems on <a href="https://leetcode.com/" target="_blank">Leetcode</a>, watch movies & TV-Series and play online games.
            </small>
          </p>
          <Button as={AnchorLink} href="#contact">
            Get in Touch
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
