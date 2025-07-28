import styled from "styled-components";

export const LevelScreenContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LevelMainArea = styled.div`
  width: 70%;
  min-width: 250px;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const  LevelTextArea= styled.div`
  flex: 1;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;
  overflow-y: auto;
`;
