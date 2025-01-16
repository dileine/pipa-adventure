import React from "react";
import { PopupWrapper, PopupInner, CloseButton } from "./Popup.styled";

const Popup = ({ isVisible, onClose, children }) => {
  return isVisible ? (
    <PopupWrapper>
      <PopupInner>
        <CloseButton className='close-btn' onClick={onClose}>
          X
        </CloseButton>
        {children}
      </PopupInner>
    </PopupWrapper>
  ) : null;
};

export default Popup;
