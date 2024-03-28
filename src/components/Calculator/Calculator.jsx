import React, { useState } from "react";
import { motion} from 'framer-motion';
import styles from "./Calculator.module.css";
import { segments, countries } from './config';

const Calculator = ({price}) => {
    const [country, setCountry] = useState('germany');
    const [segment, setSegment] = useState('cheap');

    const handleCountryChange = (evt) => {
        setCountry(evt.target.value)
    }

    const handleSegmentChange = (evt) => {
        setSegment(evt.target.value)
    }

    const calculateCost = () => {
        const { custom, registration } = segments[segment];
        const { multiplier } = countries[country];
        const basePrice = parseFloat(price);
        const totalCost = (basePrice + custom + registration) * multiplier;
        return totalCost;
    }

    const selectorAnimation =  {
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95
        }
    }

    return (<motion.div
        className={styles.container}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{duration:0.5}}
    >
        <h1 className={styles.title}>This calculator calculate the price of your car from Germany or USA</h1>
        <div className={styles.select_wrapper}>
        <div>
            <label className={styles.label}>Country:</label>
                <motion.select
                className={styles.select}
                value={country}
                onChange={handleCountryChange}
                whileHover="hover"
                whileTap="tap"
                variants={selectorAnimation}>
                {Object.keys(countries).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </motion.select>
        </div>
           <div>
            <label  className={styles.label}>Segment:</label>
                <motion.select
                className={styles.select}
                value={segment}
                onChange={handleSegmentChange}
                whileHover="hover"
                whileTap="tap"
                variants={selectorAnimation}>
                {Object.keys(segments).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))}
            </motion.select>
            </div>
            </div>
        <div className={styles.result}>
            Total price: <span className={styles.price}>${calculateCost().toFixed(2)}</span>
        </div>

    </motion.div>)

}

export default Calculator;