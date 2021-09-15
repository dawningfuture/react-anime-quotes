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

## What I Accomplished

### Project setup

- Used Webpack and Typescript to provide typings for development
- Debugged and stopped the build from including Webpack dependencies

### Code structure

- Created separate components for `RandomQuotes` and `AnimeQuotes`
  - Used `props` to pass state and event handlers
  - Used `componentDidMount` lifecycle hook to load quotes
- Created `Index` to determine whether to show `RandomQuotes` or `AnimeQuotes`
  - Used `state` to determine if an anime has been selected
- Created `Http` service to wrap `fetch` API
  - Allows for strong typing of `fetch` responses

## What's next

As I was developing this practice project, I noticed some antipatterns that ended up existing, and some further improvements I'd like to make:

- `RandomQuotes` and `AnimeQuotes` are not DRY

  - There is a lot of code duplicated between the two components, as they are both essentially tables. I would like to refactor this to a common `Table` component that accepts headers and data

- `Index` includes a wrapper `<div>`

  - I'm not sure if this is common practice, but I had to wrap the elements of `Index` in a `<div>` to create a single root for the rendered component.

- Styling
  - I would love to bring in Bootstrap to better style the app
