import {Movie} from "../models"
import Card from './Card';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({movie}: MovieCardProps) => {
  const {image, title, director} = movie;
  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <h2>{director}</h2>
      </div>
    </Card>
  )
}

export default MovieCard;
