import { useContext } from 'react';
import { ModalContext } from '../Modal/ModalContext';
import styles from './CallBackNotification.module.css';
import CountdownCounter from '../CountdownCounter/CountdownCounter';

const CallBackNotification = () => {
    const { handleOpenModal } = useContext(ModalContext);
    
    return (
        <div className={styles.notification_wrapper}>
            <p className={styles.notification_text}>
               <span> Thank you!</span>
                <span>Our manager will call you in <CountdownCounter timeProp={300} />  minutes!</span>
            </p>
            
            <button onClick={handleOpenModal} className={styles.btn} type='button'>Ok</button>
        </div>
    )
}

export default CallBackNotification