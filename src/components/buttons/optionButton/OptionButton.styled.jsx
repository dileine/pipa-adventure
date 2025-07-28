import styled from "styled-components";
import { THEME } from "../../../common/theme";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const SceneContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageArea = styled.div`
  width: 30%;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
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

export const TextArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    font-size: 2rem;
    color: ${THEME.color.text};
    border: none;
    border-radius: 25px;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: ${THEME.color.primary};
    }
  }
`;
