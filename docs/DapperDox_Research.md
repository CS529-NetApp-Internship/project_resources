# DapperDox Research

## Overview

DapperDox provides a simple way to document the API. It lacks some of the
customization present in `readme.io` but keeps some of it's key features such as
the vertical pane.

## Available Features

- Allows the use if GitHub Flavoured Markdown
- Provides built in themes and allows the creation of new ones
- Includes a left pane where headers can be organized and expanded

### Features Missing Currently In Swaggger

- Search functionality is completely missing

## Pros / Cons

### Pros

- Many aspects could be simply written in markdown
- CSS can be customized

### Cons

- No support for `yml` files were found. Specifications were only accepted as
  `.json`
- Try me feature doesn't support a text box for each parameter, the whole
  request body must be sent at once
- User must authenticate for every API endpoint by pasting their token
- Only two built in themes

## Takeaways

While DapperDox provides a simple and quick way to document the API, it's not a
good alternative to Swagger for various reasons. With the exception of the
expandable side pane, DaperDox doesn't add any new aspects to Swagger. Using it
will require implementing the search bar from start and converting the existing
`yml` configuration file to `json` format. In my assessment, investing in
building the current documentation in Swagger would be the wiser choice.

### Some features of `DapperBox` worth implementing on other platforms

- The expandable side pane facilitates navigating the page and would be a nice
  addition to swagger
