import React from 'react';
import styled, { css } from 'styled-components';
import { Route, Link } from 'react-router-dom';
import ToggleButton from './ToggleButton';
import Title from './Title';

const StyledHeader = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StyledLinkContainer = styled.div`
  display: inline-flex;
`;

const StyledSettingsContainer = styled.div`
  display: inline-flex;
  /* display: flex;
  align-items: center;
  height: 100%; */
`;

const linkStyle = css`
  border-bottom: 1px solid transparent;
  color: ${props => props.theme.buttonBackgroundHover};
  display: inline-flex;
  font-size: 0.875rem;
  margin: 0.5rem;
  padding-bottom: 1px;
  text-decoration: none;

  &:hover {
    border-bottom: 1px solid ${props => props.theme.buttonColor};
    color: ${props => props.theme.buttonColor};
  }
`;

const StyledRouterLink = styled(Link)`
  ${linkStyle}
`;
const StyledLink = styled.a`
  ${linkStyle}
`;

const Header = () => (
  <StyledHeader>
    <StyledLinkContainer>
      <StyledRouterLink to="/">Game</StyledRouterLink>
      <StyledRouterLink to="/about">About</StyledRouterLink>
      <StyledLink href="//github.com/zoltantothcom/javascript-patterns" target="_blank">
        GitHub
      </StyledLink>
    </StyledLinkContainer>

    <StyledSettingsContainer>
      <Route exact path="/" render={() => <ToggleButton control="js" />} />
      <ToggleButton control="mode" />
    </StyledSettingsContainer>

    <Title />
  </StyledHeader>
);

export default Header;