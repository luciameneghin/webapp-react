import { useGlobalContext } from "../context/GlobalContext";

const Stars = ({ film }) => {
  let totalVotes = 0

  if (film?.reviews && film?.reviews.length > 0) {
    film.reviews.forEach(review => {
      totalVotes += review.vote;
    });
  }

  const averageVote = film?.reviews?.length > 0 ? totalVotes / film.reviews.length : 0;

  const renderStars = () => {
    const roundedVote = Math.round(averageVote);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < roundedVote) {
        stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star text-warning"></i>);
      }
    }
    return stars;
  };

  return <span>{renderStars()}</span>;
};

export default Stars;



