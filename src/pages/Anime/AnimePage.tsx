import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Page } from "../../components/Page/Page";
import { Quote } from "../../models/Quote";
import { http } from "../../services/Http";
import "./AnimePage.css";
import { AnimeQuotesTable } from "./AnimeQuotesTable";

interface AnimeParams {
  anime: string;
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
    <Page>
      <Button variant="primary">
        <Link className="link" to="/">
          &#60; Back
        </Link>
      </Button>

      {error ? <h2>{error}</h2> : <AnimeQuotesTable quotes={quotes} />}
    </Page>
  );
}
