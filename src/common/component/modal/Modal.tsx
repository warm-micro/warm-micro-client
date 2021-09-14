import React, { FunctionComponent } from 'react';
import ReactModal from 'react-modal';

interface ModalProps {
  visible: boolean;
  onClose?: any;
  width?: number | string;
  height?: number | string;
  style?: any;
}

const Modal: FunctionComponent<ModalProps> = ({
  visible,
  onClose,
  width,
  height,
  style,
  children,
}) => {
  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={visible}
      style={{
        overlay: {
          zIndex: 10000,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          overflow: 'scroll',
        },
        content: {
          width: width ? width : 500,
          margin: 'auto',
          boxSizing: 'border-box',
          borderRadius: 10,
          borderColor: '#f4f4f4',
          padding: 0,
          display: 'flex',
          height: height ? height : 250,
          ...style,
        },
      }}
      onRequestClose={onClose}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
