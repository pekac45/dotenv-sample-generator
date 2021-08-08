# dotenv-sample-generator

I always forget to update .env-sample after I add new key into it.
Running dotenv-generate will remove all secrets and only save the keys and comments

## Usage

- Install

`npm i dotenv-sample-generator`

- Add this to your scripts in package.json

```"scripts": {
  "dotenv-generate": "dotenv-generate"
},
```

- Run as

`npm run dotenv-generate`
