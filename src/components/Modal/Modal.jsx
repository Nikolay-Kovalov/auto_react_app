import { useContext, useEffect } from 'react';
import { ModalContext } from './ModalContext';
import styles from './Modal.module.css';


const Modal = ({ children, width, height }) => {
    const { handleOpenModal } = useContext(ModalContext);

    useEffect(() => {
           document.body.addEventListener('keydown', handleEscClick) 
    })
 function handleBackdropClick (evt){
        if (evt.target === evt.currentTarget) {
            handleOpenModal();
        }
    }

    const handleEscClick = (evt) => {
        if (evt.code === "Escape") {
            handleOpenModal(); 
            console.log("evt");
            document.body.removeEventListener('keydown', handleEscClick)
}
    }

    return (
        <div onClick={handleBackdropClick} className={styles.backdropp}>
            <div style={{width, height}} className={styles.modal}>{children}</div>
        </div>
    )
}

export default Modal;