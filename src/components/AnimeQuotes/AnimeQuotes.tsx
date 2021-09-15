import React from "react";
import { Quote } from "../../models/Quote";
import { http } from "../../services/Http";
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
  anime: string;
  onDeselect: () => void;
}

interface AnimeQuotesState {
  quotes: Quote[];
  error?: string;
}

class AnimeQuotes extends React.Component<AnimeQuotesProps, AnimeQuotesState> {
  constructor(props: AnimeQuotesProps) {
    super(props);

    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    http<Quote[]>(
      `https://animechan.vercel.app/api/quotes/anime?title=${this.props.anime}`
    ).then(
      (quotes) => {
        this.setState({
          quotes,
          error: undefined,
        });
      },
      (error) => {
        this.setState({
          quotes: [],
          error: "Sorry, there was a problem getting the quotes",
        });
      }
    );
  }

  render() {
    const quotes = this.state.quotes;

    return (
      <div>
        <p className="back" onClick={() => this.props.onDeselect()}>
          &#60; Back
        </p>
        <table>
          <thead>
            <tr>
              <th>Character</th>
              <th>Quote</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote, i) => (
              <AnimeQuote key={i} quote={quote} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AnimeQuotes;
