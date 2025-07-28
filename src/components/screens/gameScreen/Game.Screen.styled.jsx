import styled from "styled-components";

export const GameScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

export const Sidebar = styled.div`
  width: 250px;
  min-width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MainContent = styled.div`
  margin-left: 250px;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;
