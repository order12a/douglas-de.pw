# Coding exercise
Just one coding exercise that may be used as a boilerplate further

## Requirements

Implement below scenario:

1. Navigate to https://www.douglas.de/de
2. Handle the cookie consent.
3. Click on "Parfum"
4. List the products based on filters. Create data-driven tests:

| Criteria (Highlights) | Marke |             Produktart             | Geschenk fur | Fur Wen |
| :---:   |:-----:|:----------------------------------:|:------------:|:-------:|
| Sale |   Armani   |           Eau de Parfum            |      -       |    Männlich    |
| Neu |   -   |           Eau de Parfum            |      -       |    Unisex     |
| Limitiert |   Acqua di Parma   |                  Eau de Parfum                  |      Valentinstag       |    Unisex    |

## Running Locally

Install dependencies
`npm ci`

Install playwright (if needed)
`npm run install-playwright`

Run target test, for example:
`npm run test-chrome`

(Optional) Install pre commit hooks:
`npm run prepare`

## CI and reporting

Open html report locally:
`npm run report`

CI works with the built-in GitHub actions pipeline 

## Notes
- There is still room for refactoring like adding test-config file with preloaded env variables and many more
- One scenario fails I left it intentionally
- We could reuse browser session between test scenarios but left Isolated approach
- All scenarios and assertions are designed on my own, so **crucial** communication aspect is omitted 