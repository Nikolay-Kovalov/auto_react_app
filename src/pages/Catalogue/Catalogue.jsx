import styles from './Catalogue.module.css';
import CatalogueList from "../../components/CatalogueList/CatalogueList";
import { useContext } from 'react';
import { ModalContext } from '../../components/Modal/ModalContext';
import Modal from '../../components/Modal/Modal';
import cars from '../../data';
import Slider from '../../components/Slider/Slider';


const Catalog = ({activeSlideStep,showActiveSlideStep,activeCard,showBigCard, showBigPhoto,chosenPhoto,chosenCard}) => {
    const { isModalOpen } = useContext(ModalContext)
    const car = cars.find(car => car.id === chosenCard);
    const photo = car?.image.find(img => img.id === chosenPhoto)
    // const photo = car.image.find(img => img.id === chosenPhoto);
    //  console.log(photo)
    console.log(car)
    console.log(photo?.img)
   
    return (
        <section className={styles.catalogue}>
            <h1 className={styles.title}>Catalogue</h1>
            <CatalogueList activeSlideStep={activeSlideStep} showActiveSlideStep={showActiveSlideStep} activeCard={activeCard} showBigPhoto={showBigPhoto} showBigCard={showBigCard} />
            {isModalOpen &&
                
                // <Modal Modal width={`720px`} height={`540px`}><img className={styles.big_img} src={photo?.img} alt=''></img></Modal>}
                <Modal pointerEvents="green" width={`840px`} height={`540px`}>
                    <Slider activeSlideStep={activeSlideStep} showActiveSlideStep={showActiveSlideStep} slides={car.image} width={`840px`} slideWidth={840} slideHight={500} />
                </Modal>}
            </section>
  
)
}

export default Catalog;
