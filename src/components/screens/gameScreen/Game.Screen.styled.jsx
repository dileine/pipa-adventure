import styled from "styled-components";

export const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.div`
  min-width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  margin-left: 1rem;

  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;
