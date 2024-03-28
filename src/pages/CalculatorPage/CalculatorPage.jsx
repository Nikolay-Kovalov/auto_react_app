import React, {useState} from "react";
import { motion } from "framer-motion";
import styles from './CalculatorPage.module.css';
import { useCar } from "./CarContext";
import Calculator from "../../components/Calculator/Calculator";
import cars from "../../data";





const CalculatorPage = () => {
   const [selectedCarId, setSelectedCarId] = useState(cars[0].id);
    const [totalPrice, setTotalPrice] = useState(cars[0].price);
    const { selectCar } = useCar();

 

    const handleSelectCar = (evt) => {
        const carId = parseInt(evt.target.value, 10);
        const car = cars.find(car => car.id === carId);

        setSelectedCarId(carId);
        setTotalPrice(car.price)
        selectCar(car)
    }
    return (
        <motion.div
            className={styles.container}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{duration:0.5}}
        >
            <div className={styles.wrapper}>
            <h1 className={styles.title}>Car import calculator</h1>
            <p className={styles.description}>Select a car to see the price of import your car to Ukraine</p>
            <select value={selectedCarId} onChange={handleSelectCar} className={styles.select}>
                {cars.map(car => (
                    <option key={car.id} value={car.id}>{car.brand} {car.model}</option>
                )
              
)}
            </select>
            <div className={styles.price_container}>
                <p className={styles.total_price}>Total import price: <strong>${totalPrice}</strong></p>
                </div>
            </div>
            <Calculator price={totalPrice} />
    </motion.div>
)
}

export default CalculatorPage;