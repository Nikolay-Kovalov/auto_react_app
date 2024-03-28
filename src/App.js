import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { CarProvider } from './pages/CalculatorPage/CarContext';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Catalog from './pages/Catalogue/Catalogue';
import Contacts from './pages/Contacts/Contacts';
import Layout from './components/Layout/Layout';
import CalculatorPage from './pages/CalculatorPage/CalculatorPage';
import ModalContextProvider from './components/Modal/ModalContext';
import cars from './data';

function App() {
    const [chosenPhoto, setChosenPhoto] = useState(null);
    const [chosenCard, setChosenCard] = useState(null);
    const [activeCard, setActiveCard] = useState(null);
    const [activeSlideStep, setActiveSlideStep] = useState(null);

    const showActiveSlideStep = (slideStep) => {
        setActiveSlideStep(slideStep)
    }
          console.log(activeSlideStep)

    // console.log(chosenPhoto)
    // console.log(chosenCard)
    const showActiveCard = (id) => {
      setActiveCard(cars.find(car => car.id === id))
    }
    useEffect(() => {
        showActiveCard(chosenCard)
        console.log(activeCard)
    }, [chosenCard, activeCard])
    
    const showBigPhoto = (id) => {
        setChosenPhoto(id)
    }
       const showBigCard = (id) => {
        setChosenCard(id)
    }
  return (
          <Router>
    <div className="App">
              <CarProvider>
                  <ModalContextProvider>
        <AnimatePresence wait>
            <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
                                  <Route path='catalogue' element={<Catalog
                                      activeSlideStep={activeSlideStep}
                                      showActiveSlideStep={showActiveSlideStep}
                                      activeCard={activeCard}
                                      chosenPhoto={chosenPhoto}
                                      chosenCard={chosenCard}
                                      showBigPhoto={showBigPhoto}
                                      showBigCard={showBigCard} />} />
                <Route path='calculator' element={<CalculatorPage/>} /> 
            <Route path='contacts' element={<Contacts />} />
                </Route>
          </Routes>
                      </AnimatePresence>
                      </ModalContextProvider>
          </CarProvider>
      </div>
            </Router>
  );
}

export default App;
