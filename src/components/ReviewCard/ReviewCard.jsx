const ReviewCard = ({review}) => {
  return ( 
    <div className="reviewCard">
      <h1>{review.content}</h1>
      <h2>Recommended: {review.recommended ? 'Yes':'No'}</h2>
    </div>
   );
}
 
export default ReviewCard;