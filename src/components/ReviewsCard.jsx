import { Link } from "react-router-dom"

const ReviewsCard = ({ reviews }) => {
  <div className="review-card">
    <h4>{reviews?.name}</h4>
    <p>{reviews?.text}</p>
    <p><strong>Voto:</strong> {reviews?.vote}</p>
  </div>
}

export default ReviewsCard
