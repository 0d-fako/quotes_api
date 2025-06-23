# Simple Quote API

A RESTful API built with Node.js and Express to manage quotes.

## Features

- `GET /quotes` → Retrieve all quotes
- `POST /quotes` → Add a new quote (with basic validation)

## Tech Stack

- Node.js + Express
- In-memory storage (modular + file-agnostic)

## Run Locally

```bash
npm install
node server.js
```


### POST A QUOTE

```
curl -X POST http://localhost:3000/quotes \
  -H "Content-Type: application/json" \
  -d '{"author": "Ben Okri", "text": "Stories can conquer fear, you know. They can make the heart bigger."}'
```


### GET ALL QUOTES

```
curl http://localhost:3000/quotes
```