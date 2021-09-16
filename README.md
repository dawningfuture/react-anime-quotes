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

As I am learning React, I am iterating through Attempts to learn more about the framework. If you clone the repository, the final commit for each attempt is tagged on the master branch.

### `attempt-1`: initial attempt

#### What I accomplished

- Used Webpack and Typescript to provide typings for development

  - Debugged and stopped the build from including Webpack dependencies

- Created separate components for `RandomQuotes` and `AnimeQuotes`
  - Used `props` to pass state and event handlers
  - Used `componentDidMount` lifecycle hook to load quotes
- Created `Index` to determine whether to show `RandomQuotes` or `AnimeQuotes`
  - Used `state` to determine if an anime has been selected
- Created `Http` service to wrap `fetch` API
  - Allows for strong typing of `fetch` responses

#### What's next

As I was developing this practice project, I noticed some antipatterns that ended up existing, and some further improvements I'd like to make:

- `RandomQuotes` and `AnimeQuotes` are not DRY

  - There is a lot of code duplicated between the two components, as they are both essentially tables. I would like to refactor this to a common `Table` component that accepts headers and data

- `RandomQuotes` and `AnimeQuotes` use `index` from `map()` as `key`

  - I learned that using an index from a `map()` function is discouraged, so I need to find another key to use. However, I don't think I can use any of the data returned from the API calls, as they cannot be guaranteed to be unique. I need to think on this more.

- `Index` includes a wrapper `<div>`

  - I'm not sure if this is common practice, but I had to wrap the elements of `Index` in a `<div>` to create a single root for the rendered component.

- Styling
  - I would love to bring in Bootstrap to better style the app

### `attempt-2`: added routing

#### What I accomplished

- Used `react-router-dom` to enable navigation between `HomePage` and `AnimePage`

  - Refactored `RandomQuotes` and `AnimeQuotes` to be function components that are only responsible for rendering quotes instead of also loading them

  - Made `HomePage` and `AnimePage` function components so that I can use hookes (such as the `useParams` hook from `react-router-dom`)

- Resolved `Index` (now `App`) from needing a root `<div>`
