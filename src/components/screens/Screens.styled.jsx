import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

export const BoardContainer = styled.div`
  width: 250px;
  min-width: 250px;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LevelWrapper = styled.div`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
`;
