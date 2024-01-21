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

## CI and reporting

Open html report locally:
`npm run report`

CI works with the built-in GitHub actions pipeline 