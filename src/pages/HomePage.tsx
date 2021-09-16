import React, { useEffect, useState } from "react";
import RandomQuotes from "../components/RandomQuotes/RandomQuotes";
import { Quote } from "../models/Quote";
import { http } from "../services/Http";

interface HomePageState {
  quotes: Quote[];
  error?: string;
}

export default function HomePage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    http<Quote[]>("https://animechan.vercel.app/api/quotes").then(
      (quotes) => {
        setQuotes(quotes);
      },
      (error) => {
        setQuotes([]);
        setError("Sorry, there was a problem getting the quotes");
      }
    );
  }, []);

  return error ? <h2>{error}</h2> : <RandomQuotes quotes={quotes} />;
}
