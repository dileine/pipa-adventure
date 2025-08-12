import styled from "styled-components";
import { THEME } from "../../common/theme";

export const PlayerFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem;
  font-size: 2.5rem;
`;

export const InputForm = styled.input`
  padding: 1rem;
  background-color: ${THEME.color.background};
  border: 1px solid ${THEME.color.border};
  border-radius: 6px;
  font-size: 2rem;
  margin-bottom: 2rem;

  &:focus {
    outline: none;
    border-color: ${THEME.color.primary};
  }
`;

export const FormBtn = styled.button`
  background-color: transparent;
  color: ${THEME.color.text};
  border: none;
  border-radius: 6px;
  padding: 1rem;
  margin: 2rem;
  font-size: 2rem;
  cursor: pointer;

  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${THEME.color.buttonHover};
  }
`;
