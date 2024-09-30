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
      <img src={image} alt={name} />
      <h4 className={styles.title}>
        `${name} ${model}`
      </h4>
      {/* <p></p> */}
      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default Card;
