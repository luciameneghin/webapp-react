const ReviewsCard = ({ data = [] }) => {
  return (
    <div className="review-card">
      {Array.isArray(data) ? data.map(review => (
        <div key={review?.id} className="card my-2 p-3">
          <h4>{review?.name}</h4>
          <p>{review?.text}</p>
          <p><strong>Voto:</strong> {review?.vote}</p>
        </div>
      )) : <p>Non ci sono recensioni disponibili per questo film</p>}
    </div>
  );
};

export default ReviewsCard;

