import { createContext, useState } from "react";


export const SliderContext = createContext();

const SliderContextProvider = ({ children }) => {
    const [bigSlideStep, setBigSlideStep] = useState(0);
    const [slideStep, setSlideStep] = useState(0);

    const incrementBigSlideStep = (slideWidth) => {
       setBigSlideStep(prevStep => prevStep + slideWidth)
    }

     const incrementSlideStep = (slideWidth) => {
       setSlideStep(prevStep => prevStep + slideWidth)
     }
    
        const decrementBigSlideStep = (slideWidth) => {
       setBigSlideStep(prevStep => prevStep - slideWidth)
    }

     const decrementSlideStep = (slideWidth) => {
       setSlideStep(prevStep => prevStep - slideWidth)
    }
    
    return <SliderContext.Provider value={{ bigSlideStep, incrementBigSlideStep, slideStep, incrementSlideStep, decrementBigSlideStep, decrementSlideStep }}>
        {children}
    </SliderContext.Provider>
}

export default SliderContextProvider;