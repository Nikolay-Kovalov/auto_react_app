import styles from './CatalogueList.module.css';
import cars from '../../data';
import CatalogueItem from '../CatalogueItem/CatalogueItem';

const CatalogueList = ({activeSlideStep, showActiveSlideStep,activeCard, showBigCard, showBigPhoto}) => {
    return (
        <ul className={styles.items_list}>
            {cars.map(car => {
      
                return <CatalogueItem activeSlideStep={activeSlideStep} showActiveSlideStep={showActiveSlideStep} activeCard={activeCard} showBigPhoto={showBigPhoto} showBigCard={showBigCard} key={car.id} model={car.model} price={car.price} brand={car.brand} id={car.id}  image={car.image} sh/>
            })}
        </ul>
    )
}

export default CatalogueList;