import styled from "styled-components";
import { THEME } from "../../../common/theme";
import { Link } from "react-router-dom";

export const StartScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 20rem;

  h2 {
    font-size: 4rem;
    font-weight: bold;
    text-align: center;
    color: ${THEME.color.header};
  }

  p {
    font-size: 2.5rem;
    line-height: 1.5;
    color: ${THEME.color.text};
  }
`;

export const LinkWraper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
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
