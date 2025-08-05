import styled from "styled-components";
import { THEME } from "../../../common/theme";

export const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  font-size: 1.6rem;
`;

export const Sidebar = styled.div`
  min-width: 300px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  border-right: 5px solid ${THEME.color.border};
`;

export const MainContent = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 2rem;
`;
