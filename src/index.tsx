import React from "react";
import ReactDOM from "react-dom";
import AnimeQuotes from "./components/AnimeQuotes/AnimeQuotes";
import RandomQuotes from "./components/RandomQuotes/RandomQuotes";
import "./index.css";

interface AppState {
  currentAnime?: string;
}
class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = {};
  }

  selectAnime(anime: string) {
    this.setState({
      currentAnime: anime,
    });
  }

  deselectAnime() {
    this.setState({
      currentAnime: undefined,
    });
  }

  render() {
    return (
      <div>
        <h1>Let's Learn some Anime Quotes!</h1>
        {this.state.currentAnime ? (
          <AnimeQuotes
            anime={this.state.currentAnime}
            onDeselect={() => this.deselectAnime()}
          />
        ) : (
          <RandomQuotes
            onSelectAnime={(anime: string) => this.selectAnime(anime)}
          />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
