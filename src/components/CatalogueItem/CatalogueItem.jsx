import Slider from '../Slider/Slider';
import styles from './CatalogueItem.module.css';

const CatalogueItem = ({activeSlideStep,showActiveSlideStep, activeCard, model, price, brand, id, image, showBigCard, showBigPhoto}) => {
    return (
        <li id={id} className={styles.item}>
            {activeCard?.id === id ? <Slider activeSlideStep={activeSlideStep} showActiveSlideStep={showActiveSlideStep} showBigCard={showBigCard} parentId={id} showBigPhoto={showBigPhoto} slides={activeCard.image} width={`420px`} slideWidth={420} slideHight={280} />
                        : <Slider  showActiveSlideStep={showActiveSlideStep} showBigCard={showBigCard} parentId={id} showBigPhoto={showBigPhoto} slides={image} width={`420px`} slideWidth={420} slideHight={280} />}
            {/* <Slider showBigCard={showBigCard} parentId={id} showBigPhoto={showBigPhoto} slides={image} width={`420px`} slideWidth={420} slideHight={280} /> */}
            {/* <img className={styles.img} src={image} alt={brand} /> */}
            {activeCard?.id === id ? <div className={styles.wrapper}>
                <h2 className={styles.item_title}>{activeCard.brand} {activeCard.model}</h2>
                <p className={styles.price}>{activeCard.price} $</p>
                <div className={styles.btn_wrapper}>
                    <button className={styles.calculate}>Calculate</button>
                    <button className={styles.activeCard}>Order</button>
                </div>
            </div> :
                <div className={styles.wrapper}>
                <h2 className={styles.item_title}>{brand} {model}</h2>
                <p className={styles.price}>{price} $</p>
                <div className={styles.btn_wrapper}>
                    <button className={styles.calculate}>Calculate</button>
                    <button className={styles.order}>Order</button>
                </div>
            </div>
            }
        </li>
    )
}

export default CatalogueItem;