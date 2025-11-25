import React, { useEffect } from 'react';
import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        const handleBodyScroll = () => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            handleBodyScroll();
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div 
            className="modal-overlay" 
            onClick={handleBackdropClick}
            onKeyDown={handleKeyDown}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
        >
            <div className="modal-content" role="document">
                {children}
            </div>
        </div>
    );
};

export default Modal;