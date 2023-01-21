import React from "react";
import Star from "./Star";
import styles from "./Stars.module.scss";

function Stars({ count = 0 }) {
  const result = [1, 2, 3, 4, 5].includes(count);

  return (
    <>
      {result && (
        <ul className={styles.stars}>
          {[...Array(+count)].map((_, i) => (
            <Star key={i} />
          ))}
        </ul>
      )}
    </>
  );
}
export default Stars;
