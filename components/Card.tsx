import {Movie} from '../models';

interface CardProps {
  movie: Movie;
}

const Card = ({ movie }: CardProps) => {
  const { title, director, image } = movie;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <h2>{director}</h2>
      </div>
    </div>
  );
};

export default Card;
