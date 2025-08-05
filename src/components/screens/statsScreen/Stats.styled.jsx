import styled from "styled-components";
import { THEME } from "../../../common/theme";

export const StatContainer = styled.div`
  padding.1.5rem;
  border-radius:8px;
  width: 100%;
`;

export const StatRow = styled.p`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin: 1rem 0;
  font-size: 2rem;
  color: ${THEME.color.text};
`;

export const StatIcon = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
`;
