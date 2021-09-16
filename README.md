# Practice React Project - Anime Quotes!

This is a simple practice project I'm using to learn React. It uses the Animechan API to show quotes from various anime, as well as a specific anime.

## Usage

Clone this repository and install its dependencies:

```
npm i
```

Then run the app:

```
npm start
```

In the browser, open http://localhost:8080.

## Development Tagging

As I am learning React, I am iterating through Attempts to learn more about the framework. If you clone the repository, the final commit for each attempt is tagged on the master branch.

### `attempt-1`: initial attempt

- Used Webpack and Typescript to provide typings for development

  - Debugged and stopped the build from including Webpack dependencies

- Created separate components for `RandomQuotes` and `AnimeQuotes`
  - Used `props` to pass state and event handlers
  - Used `componentDidMount` lifecycle hook to load quotes
- Created `Index` to determine whether to show `RandomQuotes` or `AnimeQuotes`
  - Used `state` to determine if an anime has been selected
- Created `Http` service to wrap `fetch` API
  - Allows for strong typing of `fetch` responses

### `attempt-2`: added routing

- Used `react-router-dom` to enable navigation between `HomePage` and `AnimePage`

  - Refactored `RandomQuotes` and `AnimeQuotes` to be function components that are only responsible for rendering quotes instead of also loading them

  - Made `HomePage` and `AnimePage` function components so that I can use hookes (such as the `useParams` hook from `react-router-dom`)

- Resolved `Index` (now `App`) from needing a root `<div>`

### `attempt-3`: refactored tables

- Created a reusable `Table` component that allows me to DRY out the code

### `attempt-4`: added Bootstrap for styling

- Added Bootstrap using `react-bootstrap` to style the app

  - Created a header with a `Navbar`

  - Used `Table` from `react-bootstrap` to style the `Table` component

  - Used `Button` for the back button on the Anime Page
