import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export interface IProps {
  id: number;
  name: string;
  language: string;
  genres: string;
  runtime?: string;
  premiered?: string;
  rating: string;
  countryName: string;
  thumbnail?: string;
}
export const AvengersCard: React.FC<IProps> = ({
  name,
  language,
  genres,
  countryName,
  id,
}) => {
  return (
    <>
      <Card>
        <Link to={`/tv-shows/details/${id}`}>
          <Card.Header>{name}</Card.Header>
        </Link>
        <Card.Body>
          <p>{language}</p>
          <p>{genres}</p>
          <p>{countryName}</p>
        </Card.Body>
      </Card>
    </>
  );
};
