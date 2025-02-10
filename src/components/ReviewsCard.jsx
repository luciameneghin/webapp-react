import { Link } from "react-router-dom"

const ReviewsCard = ({ review }) => {
  <div className="review-card">
    <h4>{review.name}</h4>
    <p>{review.text}</p>
    <p><strong>Voto:</strong> {review.vote}</p>
  </div>
}

export default ReviewsCard
