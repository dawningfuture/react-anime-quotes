import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Quote } from "../../models/Quote";
import { http } from "../../services/Http";
import AnimeQuotes from "./AnimeQuotes";

interface AnimeParams {
  anime: string;
}

interface AnimePageState {
  quotes: Quote[];
  error?: string;
}

export default function AnimePage() {
  const { anime } = useParams<AnimeParams>();
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    http<Quote[]>(
      `https://animechan.vercel.app/api/quotes/anime?title=${anime}`
    ).then(
      (quotes) => {
        setQuotes(quotes);
      },
      (error) => {
        setQuotes([]);
        setError("Sorry, there was a problem getting the quotes");
      }
    );
  }, []);

  return (
    <div>
      <Link to="/">&#60; Back</Link>

      {error ? <h2>{error}</h2> : <AnimeQuotes quotes={quotes} />}
    </div>
  );
}
