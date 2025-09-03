import styled from "styled-components";
import { THEME } from "../../../common/theme";
import { Link } from "react-router-dom";

export const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  font-size: 2.5rem;
  position: relative;
`;

export const Sidebar = styled.div`
  min-width: 300px;
  padding: 2rem;
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 2rem;
  color: ${THEME.color.header};
`;

export const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
  margin-left: 300px;
  margin-top: 3rem;
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    font-size: 1.6rem;
    color: ${THEME.color.text};
    border: none;
    border-radius: 8px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: ${THEME.color.primary};
      transform: translateY(-2px);
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1.6rem;
  color: ${THEME.color.text};
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${THEME.color.primary};
    transform: translateY(-2px);
  }
`;
