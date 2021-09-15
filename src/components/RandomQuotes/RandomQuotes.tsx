import React from "react";
import { Quote } from "../../models/Quote";
import { http } from "../../services/Http";
import "./RandomQuotes.css";

interface RandomQuoteProps {
  quote: Quote;
  onSelect: () => void;
}

const RandomQuote = (props: RandomQuoteProps) => (
  <tr>
    <td className="anime" onClick={() => props.onSelect()}>
      {props.quote.anime}
    </td>
    <td>{props.quote.character}</td>
    <td>{props.quote.quote}</td>
  </tr>
);

interface RandomQuotesProps {
  onSelectAnime: (anime: string) => void;
}

interface RandomQuotesState {
  quotes: Quote[];
  error?: string;
}

class RandomQuotes extends React.Component<
  RandomQuotesProps,
  RandomQuotesState
> {
  constructor(props: RandomQuotesProps) {
    super(props);

    this.state = {
      quotes: [],
    };
  }

  componentDidMount() {
    http<Quote[]>("https://animechan.vercel.app/api/quotes").then(
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
      <table>
        <thead>
          <tr>
            <th>Anime</th>
            <th>Character</th>
            <th>Quote</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((quote, i) => (
            <RandomQuote
              key={i}
              quote={quote}
              onSelect={() => this.props.onSelectAnime(quote.anime)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default RandomQuotes;
