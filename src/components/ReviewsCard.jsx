
const ReviewsCard = ({ data = [] }) => {
  return (
    <div className="review-card row row-cols-3">
      {Array.isArray(data) ? data.map(review => (
        <div key={review?.id} className="card p-3 col-4 mb-4">
          <h6>{review?.name}</h6>
          <p>{review?.text}</p>
          <p><strong>Vote:</strong> {review?.vote} / 5 <i className="bi bi-star-fill text-warning"></i></p>
        </div>
      )) : <p>Non ci sono recensioni disponibili per questo film</p>}
    </div>
  );
};

export default ReviewsCard;

