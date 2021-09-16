import React from "react";
import { Quote } from "../../models/Quote";
import "./AnimeQuotes.css";

interface AnimeQuoteProps {
  quote: Quote;
}

const AnimeQuote = (props: AnimeQuoteProps) => (
  <tr>
    <td>{props.quote.character}</td>
    <td>{props.quote.quote}</td>
  </tr>
);

interface AnimeQuotesProps {
  quotes: Quote[];
}

export default function AnimeQuotes(props: AnimeQuotesProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Character</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody>
        {props.quotes.map((quote, i) => (
          <AnimeQuote key={i} quote={quote} />
        ))}
      </tbody>
    </table>
  );
}
