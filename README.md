# jennydong paintings
A template media display app, fetching paintings and metadata from an API and displaying. Written in a functional/hooks paradigm. Uses an http service that wraps the native fetch api.

## Stack
- React
- React-Router
- Redux
- Redux-Sagas

## Features
- Http service that accepts request and response middlewares, based on fetch api
- ProgressiveImage component that accepts an array of src strings and gradually fetches higher quality images
- Standard redux store extended with hooks that provide quick access to memoized selectors

## To Run
- `git clone` the project
- run `npm i`
- run `npm run start:dev`
- Open in localhost:8080
