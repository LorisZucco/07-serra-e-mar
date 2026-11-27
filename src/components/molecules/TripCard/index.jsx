import styles from "./trip-card.module.css";
import Price from "../../atoms/Price";
import Tag from "../../atoms/Tag";
import Button from "../../atoms/Button";

export default function TripCard({ trip }) {
  return (
    <article className={styles.card}>
      <span className={styles.emoji}>{trip.emoji}</span>
      <h3 className={styles.title}> {trip.name}</h3>
      <p className={styles.region}>
        {trip.region} · {trip.days}
      </p>
      <p className={styles.description}>{trip.description}</p>
      <div className={styles.tag}>
        {trip.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <Price>R$ {trip.Price}</Price>
      <Button>Quero ir</Button>
    </article>
  );
}
