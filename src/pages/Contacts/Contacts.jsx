import React from "react";
import { motion } from "framer-motion";
import styles from './Contacts.module.css'

const Contacts = () => {
    return (
        <motion.div
            className={styles.main_wrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration:0.5}}
        >
            <div className={styles.contacts_wrapper}>
        <h1 className={styles.title}>Contacts</h1>
            <h3 className={styles.subtitle}>Get in touch for more information</h3>
            <address className={styles.address}>
                    <p className={styles.city}>Lviv city</p>
                    <p className={styles.address_info}>Horodetskogo srt, 118</p>
                    <p className={styles.tel}><a className={styles.link} href="tel:+300993455634">Tel: +30 099 345 56 34</a></p>
                    <p className={styles.phone}><a className={styles.link} href="mailto:sales@gmail.com">Email: sales@gmail.com</a></p>
                </address>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.383751335479!2d23.988531488166775!3d49.835246557945815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add86ef1f8c77%3A0xe5707f8892cbb520!2z0YPQuy4g0JPQvtGA0L7QtNC-0YbQutCw0Y8sIDExOCwg0JvRjNCy0L7Qsiwg0JvRjNCy0L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1sru!2sua!4v1709925382639!5m2!1sru!2sua" width="700" height="500" style={{border: "none", borderRadius: "12px"  }} title="map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </motion.div>
    )
}

export default Contacts;