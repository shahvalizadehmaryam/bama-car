import styles from "./Card.module.css";
import Location from "../icons/Location";
const Card = (props) => {
  const { name, model, year, distance, location, price, image } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h4 className={styles.title}>
        {name} {model}
      </h4>
      <p className={styles.detail}>
        {year} . {distance}km
      </p>
      <div className={styles.footer}>
        <p>${price}</p>
        <div className={styles.location}>
          <p>{location}</p>

          <Location />
        </div>
      </div>
    </div>
  );
};

export default Card;
