import styles from './ReviewCard.module.css'

const ReviewCard = ({review, owner}) => {
  return ( 
    <div  className={styles.reviewCard}>
      <h5> Review from {review.owner.name}</h5>
      <p  className={styles.content}>{review.content}</p>
      <p className={styles.recommend}>Recommended: {review.recommended ? <span className={styles.yes}>Yes</span> : <span className={styles.no}>No</span>}</p>
    </div>
  );
}

export default ReviewCard;