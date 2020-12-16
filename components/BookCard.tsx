import { Book } from "../models";
import Card from "./Card";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  const { image, title, author, datePublished } = book;
  return (
    <Card>
      <img src={image} alt={title} />
      <div>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <p>{datePublished}</p>
      </div>
    </Card>
  );
};

export default BookCard;
