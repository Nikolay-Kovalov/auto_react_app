import { useContext, useEffect,  useRef, useState } from 'react';
import styles from './Slider.module.css';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { ModalContext } from '../Modal/ModalContext';

import { SliderContext } from './SliderContext';


const Slider = ({ slides, width, slideWidth, slideHight, showBigPhoto,showBigCard, parentId}) => {
    const [disabledPrevBtn, setDesabledPrevBtn] = useState(true);
    const [disabledNextBtn, setDesabledNextBtn] = useState(false);
    const slidesRef = useRef();
    // const [bigSlideStep, setBigSlideStep] = useState(0);
    const [slideStep, setSlideStep] = useState(0);

  



    // const incrementBigSlideStep = (slideWidth) => {
    //    setBigSlideStep(prevStep => prevStep + slideWidth)
    // }

     const incrementSlideStep = (slideWidth) => {
       setSlideStep(prevStep => prevStep + slideWidth)
     }
    
    //     const decrementBigSlideStep = (slideWidth) => {
    //    setBigSlideStep(prevStep => prevStep - slideWidth)
    // }

     const decrementSlideStep = (slideWidth) => {
       setSlideStep(prevStep => prevStep - slideWidth)
    }

    const { isModalOpen,handleOpenModal } = useContext(ModalContext);

    const handleShowLargeImg = (id) => {
        handleOpenModal()
        showBigPhoto(id)
        showBigCard(parentId)
    }

  
    const {bigSlideStep, incrementBigSlideStep, decrementBigSlideStep } = useContext(SliderContext)
    // const {bigSlideStep, incrementBigSlideStep, slideStep, incrementSlideStep,decrementBigSlideStep, decrementSlideStep } = useContext(SliderContext)

    useEffect(() => {
        if (isModalOpen) {
      
            slidesRef.current.style = `transform: translateX(-${bigSlideStep}px)`;
            console.log(bigSlideStep)
             if (bigSlideStep > 0) {
            setDesabledPrevBtn(false)
        } if (bigSlideStep === 0) {
            setDesabledPrevBtn(true)
        }
        if (bigSlideStep === (slidesRef.current.children.length * slideWidth)-slideWidth) {
            setDesabledNextBtn(true)
        }
        if(bigSlideStep < (slidesRef.current.children.length * slideWidth)-slideWidth) {
            setDesabledNextBtn(false)
        }  
        }
        if (!isModalOpen) {
         
          slidesRef.current.style = `transform: translateX(-${slideStep}px)`;
             if (slideStep > 0) {
            setDesabledPrevBtn(false)
        } if (slideStep === 0) {
            setDesabledPrevBtn(true)
        }
        if (slideStep === (slidesRef.current.children.length * slideWidth)-slideWidth) {
            setDesabledNextBtn(true)
        }
        if(slideStep < (slidesRef.current.children.length * slideWidth)-slideWidth) {
            setDesabledNextBtn(false)
            }   
        }
  
       
    }, [slideStep, slideWidth, isModalOpen, bigSlideStep,parentId])

    const onPrevBtnClick = () => {
        if (isModalOpen) {
            slidesRef.current.style = `transform: translateX(-${slideStep}px)` 
            decrementBigSlideStep(slideWidth)
            decrementSlideStep(slideWidth/2)
        }
        if (!isModalOpen) {
            slidesRef.current.style = `transform: translateX(-${slideStep}px)`
            decrementSlideStep(slideWidth)
            decrementBigSlideStep(slideWidth*2)
        }
    }

    const onNextBtnClick = () => {
        if (isModalOpen) {
        slidesRef.current.style = `transform: translateX(-${bigSlideStep}px)`
            incrementBigSlideStep(slideWidth)
            incrementSlideStep(slideWidth/2)
            console.log(slideStep)

   }
        if (!isModalOpen) {
          slidesRef.current.style = `transform: translateX(-${slideStep}px)`
           incrementSlideStep(slideWidth)
            incrementBigSlideStep(slideWidth * 2)
           
      }  
    }
    return (
        <div className={styles.slide_container} style={{width}}>
            <ul ref={slidesRef} className={styles.slides}>
                {slides.map(slide => {
                    return <li key={slide.id}><img id={slide.id} onClick={()=>handleShowLargeImg(slide.id)}  className={slideWidth > 500 ? styles.image + " " + styles.pointer : styles.image} height={slideHight} width={slideWidth} src={slide.img} alt="" /></li>
                })}
            </ul>
            <button disabled={disabledPrevBtn ? true : false} onClick={onPrevBtnClick} className={styles.prev_slide}><SlArrowLeft className={disabledPrevBtn ? styles.left + " " + styles.disabled : styles.left }/></button>
            <button disabled={disabledNextBtn ? true : false} onClick={onNextBtnClick} className={styles.next_slide}><SlArrowRight className={disabledNextBtn ? styles.right + " " + styles.disabled : styles.right } /></button>
            </div>
    )
}

export default Slider;