import { useEffect, useRef } from 'react';

function Modal({ isOpen, children, toggleModal, title = 'Modal' }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      const modalElement = modalRef.current;
      //add any focusable HTML element you want to include to this string
      const focusableElements = modalElement.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKeyPress = (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === lastElement
          ) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      };

      const handleEscapeKeyPress = (event) => {
        if (event.key === 'Escape') {
          toggleModal(false);
        }
      };

      modalElement.addEventListener('keydown', handleTabKeyPress);
      modalElement.addEventListener('keydown', handleEscapeKeyPress);

      return () => {
        modalElement.removeEventListener('keydown', handleTabKeyPress);
        modalElement.removeEventListener('keydown', handleEscapeKeyPress);
      };
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen, toggleModal]);

  return (
    <div
      className="modal__overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) toggleModal(false);
      }}
      onKeyDown={(e) => {
        console.log(e.key);
        if (e.key === 'Escape') {
          toggleModal();
        }
      }}
    >
      <div className="modal" ref={modalRef}>
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close"
            onClick={(e) => {
              e.stopPropagation();
              toggleModal(false);
            }}
            type="button"
          >
            X
          </button>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
