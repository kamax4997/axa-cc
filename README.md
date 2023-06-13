# AXA JS Coding Challenge

_"A minimally opinionated node santa app"_

## Usage:

You should copy `.env.sample` to `.env` and then:

`npm run dev` - Run the development server.

`npm test` - Run tests.

`npm run test:watch` - Run tests when files update.

`npm run build` - Builds the server.

`npm start` - Runs the server.

## Tech Stack:

```
Express
Axios
NodeMailer
Jest
Typescript
```

## Default endpoints:

A `GET` request to `/` will respond with a description of the application.

A `GET` request to `/sent` will show the message after the email is sent.

A `GET` request to `/error` will display proper error messages.

A `POST` request to `/` will send the wish text to Santa.

## Improvements

- Cover the whole codebase with tests.
- Improve logger.
