import { useEffect, useState } from "react";

import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

export interface DetailsProps {
  name: string;
  language: string;
  url: string;
}

export const AvengerDetails: React.FC = () => {
  const [details, setDetails] = useState<DetailsProps>();
  const { id }: any = useParams();
  const url = `https://api.tvmaze.com/shows/${id}`;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDetails(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, []);

  useEffect(() => {
    console.log(details);
  }, [details]);

  return (
    <>
      <Card>
        <Card.Body>
          <p>{details?.name}</p>
          <p>{details?.language}</p>
          <p>{details?.url}</p>
        </Card.Body>
      </Card>
    </>
  );
};
