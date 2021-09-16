import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import { Quote } from "../../models/Quote";

interface RandomQuotesProps {
  quotes: Quote[];
}

export function RandomQuotesTable(props: RandomQuotesProps) {
  const headers = ["Anime", "Character", "Quote"];
  const data = props.quotes.map((quote) => ({
    data: [
      <Link to={`/anime/${quote.anime}`}>{quote.anime}</Link>,
      quote.character,
      quote.quote,
    ],
  }));

  return <Table headers={headers} rows={data} />;
}
