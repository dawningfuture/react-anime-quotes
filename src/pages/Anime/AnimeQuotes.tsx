import React from "react";
import Table from "../../components/Table/Table";
import { Quote } from "../../models/Quote";

interface AnimeQuotesProps {
  quotes: Quote[];
}

export default function AnimeQuotes(props: AnimeQuotesProps) {
  const headers = ["Character", "Quote"];
  const data = props.quotes.map((quote) => [quote.character, quote.quote]);

  return <Table headers={headers} data={data} />;
}
