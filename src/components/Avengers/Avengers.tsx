import { useEffect, useState } from "react";

import { AvengersCard } from "../AvengersCard";

export const Avengers: React.FC = () => {
  const url = "https://api.tvmaze.com/search/shows?q=avengers";

  const [avengers, setAvengers] = useState([]);

  useEffect(() => {
    const fetchAvengers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setAvengers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAvengers();
  }, []);

  //   useEffect(() => {
  //     console.log(avengers, "avengers");
  //   }, [avengers]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridAutoRows: "auto",
          gap: "1rem",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {Array.isArray(avengers) &&
          avengers.length &&
          avengers.map((av: any) => {
            return (
              <AvengersCard
                id={av.show.id}
                name={av.show.name}
                language={av.show.language}
                genres={av.show.genres}
                rating={av.show.rating}
                countryName={av.show.summery}
                key={av.show.id}
              />
            );
          })}
      </div>
    </>
  );
};
