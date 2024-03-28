import React, { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const useCar = () => useContext(CarContext)
export const CarProvider = ({children}) => {
    const [selectedCar, setSelectedCar] = useState(null);
    const selectCar = (car) => {
        setSelectedCar(car)
    }
    return (
        <CarContext.Provider
            value={{ selectCar, selectedCar }}>
            {children}
        </CarContext.Provider>
    )
}