import React from "react";
import Star from "./Star";
import styles from "./Stars.module.scss";

function Stars({ count = 0 }) {
  const result = [1, 2, 3, 4, 5].includes(+count);
  return (
    <>
      {result ? (
        <ul className={styles.stars}>
          {[...Array(+count)].map((_, i) => (
            <Star key={i} />
          ))}
        </ul>
      ) : (
        <div className={styles.error}>
          Count= {count}. Not included in the array of integers from 1 to 5.
        </div>
      )}
    </>
  );
}
export default Stars;
