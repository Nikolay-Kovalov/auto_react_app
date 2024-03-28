import { useContext, useEffect, useState } from 'react';
import styles from './CountdownCounter.module.css';
import { ModalContext } from '../Modal/ModalContext';

const CountdownCounter = ({ timeProp }) => {
    const{handleOpenModal}=useContext(ModalContext)
    const [time, setTime] = useState(timeProp);
    const [minutes, setMinutes] = useState(Math.floor(time / 60));
    const [seconds, setSeconds] = useState(time % 60);
    


    useEffect(() => {
            const countDown = (id) => {
                setTime(time - 1)
                console.log(time)
                setMinutes(Math.floor(time / 60))
                setSeconds(time % 60)
                clearTimeout(id)
                if (time === 0) {
                    handleOpenModal()
                }
    }
        const id = setTimeout(()=>countDown(id), 1000)  
    },[time, handleOpenModal])
    return (
        <span className={styles.countdown}>
            <span className={styles.time}>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? "0" + seconds : seconds}</span>
        </span>
    )
}

export default CountdownCounter;