import styled from "styled-components";
import { THEME } from "../../../common/theme";

export const Container = styled.div`
  padding: 1.5rem;
  width: 100%;
`;

export const SceneContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextArea = styled.div`
  p {
    font-size: 2.5rem;
    line-hight: 1.5;
    color: ${THEME.color.text};
    margin-bottom: 2rem;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

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
