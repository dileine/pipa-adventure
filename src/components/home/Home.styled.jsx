import styled from "styled-components";
import { THEME } from "../../common/theme";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin: 5rem 2rem 0;

  h1 {
    display: flex;
    font-size: 6rem;
    color: ${THEME.color.header};
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  padding: 1rem;
  font-size: 2rem;
  color: ${THEME.color.text};
  background-color: ${THEME.color.button};
  border-radius: 8px;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: ${THEME.color.buttonHover};
  }
`;
