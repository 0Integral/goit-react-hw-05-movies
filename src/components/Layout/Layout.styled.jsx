import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;
export const Header = styled.header`
  border-bottom: solid 1px black;
`;
export const Navigation = styled.nav`
  display: inline-flex;
  gap: 20px;
  padding: 20px;
`;
export const StyledLink = styled(NavLink)`
  font-size: 17px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: orange;
  }
`;
