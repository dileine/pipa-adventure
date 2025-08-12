import styled from "styled-components";

export const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.29);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 10rem;
  width: 50%;
  background-color: rgba(36, 243, 60, 0.32);
  box-shadow: 0px 0px 10px 0px rgba(32, 119, 191, 0.38);
  border-radius: 10px;
  border-radius: 3rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
