import React, { useState } from "react";
import styles from "./card.module.css";

const Card = ({ description, headline, image }) => {
  const [hidden, setHidden] = useState(true);
  return (
    <article className={styles.Card}>
      <figure className={styles.CardMedia}>
        <img src={image.src} alt={image.alt} />
      </figure>
      <h3 className={styles.CardHeadline}>{headline}</h3>
      <aside
        className={`${styles.CardDescription} ${hidden ? styles.isHidden : ""}`}
      >
        {description}
      </aside>
      <footer className={styles.CardActions}>
        <button
          onClick={() => {
            setHidden((state) => !state);
          }}
        >
          {hidden ? "Show" : "Hide"}
        </button>
      </footer>
    </article>
  );
};

export default Card;
