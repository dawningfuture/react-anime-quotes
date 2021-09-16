import React from "react";
import { Link } from "react-router-dom";
import Table from "../../components/Table/Table";
import { Quote } from "../../models/Quote";

interface RandomQuotesProps {
  quotes: Quote[];
}

export default function RandomQuotes(props: RandomQuotesProps) {
  const headers = ["Anime", "Character", "Quote"];
  const data = props.quotes.map((quote) => [
    <Link to={`/anime/${quote.anime}`}>{quote.anime}</Link>,
    quote.character,
    quote.quote,
  ]);

  return <Table headers={headers} data={data} />;
}
