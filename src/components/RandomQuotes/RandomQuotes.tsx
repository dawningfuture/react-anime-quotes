import React from "react";
import { Link } from "react-router-dom";
import { Quote } from "../../models/Quote";
import "./RandomQuotes.css";

interface RandomQuoteProps {
  quote: Quote;
}

const RandomQuote = (props: RandomQuoteProps) => (
  <tr>
    <td>
      <Link to={`/anime/${props.quote.anime}`}>{props.quote.anime}</Link>
    </td>
    <td>{props.quote.character}</td>
    <td>{props.quote.quote}</td>
  </tr>
);

interface RandomQuotesProps {
  quotes: Quote[];
}

export default function RandomQuotes(props: RandomQuotesProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Anime</th>
          <th>Character</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody>
        {props.quotes.map((quote, i) => (
          <RandomQuote key={i} quote={quote} />
        ))}
      </tbody>
    </table>
  );
}
