# Hardlydifficult Example

Shows how easy things can look, while still pretty functional. This is based off of [Hardlydifficult](https://www.twitch.tv/hardlydifficult)'s learning experience app.

#### prerequisites

- postgresql
- node.js >= 6.x

## 🐴 get it, use it

1. Setup Postgres database. The `dumps/db.sql` dump has some test data, while `dumps/schema.sql` only contains the schema without data.

2. Start it, baby

```sh
$ git clone https://github.com/fnky/hardlydifficult-example.git
$ cd hardlydifficult-example
$ npm install # or yarn
$ npm start # or node server.js
```

> You'll need to add environment variable `DATABASE_URL` with your connection url (or `export DATABASE_URL=<url>`) to connect with your database.

## license

[WTFPL](LICENSE)
