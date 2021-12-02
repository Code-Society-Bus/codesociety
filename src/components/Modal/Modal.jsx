import React from 'react';

import './modal.css';

const Modal = ({ children, onClick }) => {
    return (
        <div onClick={onClick} className="modal">
            <div className="modal__container">
                <i onClick={onClick} className="modal__icon fas fa-times"></i>
                {children}
            </div>
        </div>
    )
}

export default Modal;
