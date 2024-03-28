import React, { useContext } from "react";
import styles from './Home.module.css'
import { motion } from "framer-motion";
import { HiArrowLongRight } from "react-icons/hi2";
import HomePageForm from "../../components/HomePageForm/HomePageForm";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import { ModalContext } from "../../components/Modal/ModalContext";
import CallBackNotification from "../../components/CallBackNotification/CallBackNotification";

const Home = () => {
    const {isModalOpen} = useContext(ModalContext);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.wrapper}
        >
            <div className={styles.slogan_wrapper}>
    <h1 className={styles.title}>Welcome to auto-auction company</h1>   
                <h2 className={styles.sub_title}>There you can find a car of your dream</h2>  
                <Link to="/catalogue" className={styles.main_btn}>Find a car</Link>
                <h3 className={styles.consult_title}>Need an urgent consultation?</h3>
                <p className={styles.consult_text}>Fill in this form and our manager will contact you within 30 minutes<HiArrowLongRight className={styles.arrow_long} /></p>
            </div>
            {isModalOpen && <Modal width={`480px`}><CallBackNotification/></Modal>}
<HomePageForm/>      
</motion.div>
    )
}

export default Home;