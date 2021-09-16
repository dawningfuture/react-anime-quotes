import React from "react";
import Table from "../../components/Table/Table";
import { Quote } from "../../models/Quote";

interface AnimeQuotesProps {
  quotes: Quote[];
}

export function AnimeQuotesTable(props: AnimeQuotesProps) {
  const headers = ["Character", "Quote"];
  const data = props.quotes.map((quote) => ({
    data: [quote.character, quote.quote],
  }));

  return <Table headers={headers} rows={data} />;
}
