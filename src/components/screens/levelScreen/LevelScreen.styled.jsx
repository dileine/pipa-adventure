import styled from "styled-components";
import { THEME } from "../../../common/theme";

export const LevelScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;

  h1 {
    font-size: 6rem;
    color: ${THEME.color.header};
    margin-bottom: 1rem;
  }
`;

export const LevelMainArea = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: row;
`;

export const LevelTextArea = styled.div`
  flex: 1;
  width: 100%;
  padding: 2rem;
  background-color: ${THEME.color.background || "white"};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ImageArea = styled.div`
  width: 30%;
  max-width: 600px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-height: 300px;

    img {
      width: 100%;
      height: auto;
    }
  }
`;
