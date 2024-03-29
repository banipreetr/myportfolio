import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail, ButtonGroup } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Banipreet and I’m a Software Engineer in London!</h4>
          <ButtonGroup>
            <Button as={AnchorLink} href="#contact">
              Get in Touch
            </Button>
          </ButtonGroup>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Banipreet and I’m a backend engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
