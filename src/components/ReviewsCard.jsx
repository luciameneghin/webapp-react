import Stars from "./Stars";

const ReviewsCard = ({ data = [] }) => {
  return (
    <div className="review-card row row-cols-3">
      {Array.isArray(data) ? data.map(review => (
        <div key={review?.id} className="card p-3 col-4 mb-4">
          <h6>{review?.name}</h6>
          <p>{review?.text}</p>
          <div><strong>Vote:</strong>  <Stars film={{ reviews: [{ vote: review?.vote }] }} /></div>
        </div>
      )) : <p>Non ci sono recensioni disponibili per questo film</p>}
    </div>
  );
};

export default ReviewsCard;

