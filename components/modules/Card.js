import styles from "./Card.module.css";
const Card = (props) => {
  const {
    id,
    name,
    model,
    year,
    distance,
    location,
    price,
    description,
    image,
    category,
  } = props;
  return (
    <div className={styles.container}>
      <img src={image} alt={name} className={styles.image} />
      <h4 className={styles.title}>
        `${name} ${model}`
      </h4>
      <p className={styles.detail}>`${year} . ${distance}`</p>
      <div className={styles.footer}>
        <p>${price}</p>
        <div>
            {location}
        </div>
      </div>
    </div>
  );
};

export default Card;
