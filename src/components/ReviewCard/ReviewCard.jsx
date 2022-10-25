import styles from './ReviewCard.module.css'

const ReviewCard = ({review}) => {
  return ( 
    <div  className={styles.reviewCard}>
      <h3> Review: </h3>
      <p  className={styles.content}>{review.content}</p>
      <p className={styles.recommend}>Recommended: {review.recommended ? <span className={styles.yes}>Yes</span> : <span className={styles.no}>No</span>}</p>
    </div>
  );
}

export default ReviewCard;