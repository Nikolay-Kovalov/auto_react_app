import { useContext, useEffect, useRef, useState } from 'react';
import styles from './Slider.module.css';
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { ModalContext } from '../Modal/ModalContext';

const Slider = ({activeSlideStep, showActiveSlideStep, slides, width, slideWidth, slideHight, showBigPhoto,showBigCard, parentId, pointerEvents}) => {
    const [slideStep, setSlideStep] = useState(activeSlideStep || 0);
    const [disabledPrevBtn, setDesabledPrevBtn] = useState(true);
    const [disabledNextBtn, setDesabledNextBtn] = useState(false);
    const slidesRef = useRef();

    const { isModalOpen } = useContext(ModalContext);

    useEffect(() => {
        if (isModalOpen) {
            showActiveSlideStep(slideWidth*2)
                console.log(activeSlideStep)
        }
        if (!isModalOpen) { showActiveSlideStep(slideWidth) }
    }, [slideStep, showActiveSlideStep, isModalOpen, slideWidth, activeSlideStep])

    const{handleOpenModal} = useContext(ModalContext)

    const handleShowLargeImg = (id) => {
        handleOpenModal()
        showBigPhoto(id)
        showBigCard(parentId)

    }

    useEffect(() => {
  
        if (isModalOpen) {
                    console.log(slideStep)
        //   slidesRef.current.style = `transform: translateX(-${slideStep}px)`;
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
       
    }, [slideStep, slideWidth, isModalOpen])

    const onPrevBtnClick = () => {

slidesRef.current.style = `transform: translateX(-${slideStep}px)`   
setSlideStep(prevStep => prevStep - slideWidth)
    showActiveSlideStep(slideStep) 
    }

    const onNextBtnClick = () => {
 
        if (isModalOpen) {
                console.log(slideStep)
        slidesRef.current.style = `transform: translateX(-${activeSlideStep}px)`
    
        setSlideStep(prevStep => prevStep + slideWidth)
        showActiveSlideStep(slideStep)
   }
        if (!isModalOpen) {
          slidesRef.current.style = `transform: translateX(-${slideStep}px)`
        console.log(slideStep)
        setSlideStep(prevStep => prevStep + slideWidth)
        showActiveSlideStep(slideStep)
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