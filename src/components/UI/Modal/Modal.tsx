import React, {ReactNode} from 'react';
import './Modal.css';

interface ModalProps {
   children: ReactNode;
   isOpen: boolean;
   onClose: () => void;
}

const Modal = (props: ModalProps) => {
   const {
      children,
      isOpen,
      onClose,
   } = props;

   const openClass: string = isOpen ? 'modal__overlay--active' : '';

   const modalContentClick = (e: any) => {
      e.stopPropagation();
   }

   return (
      <div
         onClick={onClose}
         className={`modal__overlay ${openClass}`}
      >
         <div
            onClick={modalContentClick}
            className="modal__content"
         >
            {children}
         </div>
      </div>
   );
};

export default Modal;
