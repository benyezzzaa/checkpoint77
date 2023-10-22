import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          
          {movie.description}
        </Card.Text>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        
        />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;