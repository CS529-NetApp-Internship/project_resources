# LucyBot Research

## Overview

`LucyBot` is another API documentation generating tool that focuses on
simplicity while being visually appealing. It's similar to Swagger in many ways,
however, it is more compact.

## Available Features

- Includes a side pane with an expandable list of endpoints.
- Basic search bar in the top of the navigation pane

### Features Missing Currently In Swaggger

- One small difference is that documentation and endpoint operations are usually
  on separate pages but can be switched to one another easily

## Pros / Cons

### Pros

- Ability to use our own Bootstrap theme
- Customizable CSS
- Can use markdown in some sections

### Cons

- Doesn't automatically mention the type of endpoint (get, post, delete, etc)
- Doesn't mention the data type of each parameter
- No clear way of using `yml` file instead of `json`
- No mention of version tracking
- Some features are locked behind a commercial version

## Takeaways

This visualization tool has the potential to be used for our project. However,
it would require significant changes such as the following:

- Adding the type of operation (post, get, delete)
- Showing the type of parameter that an endpoint receives (int, string, etc)

A potential issue that could come up is that with the increase of number in API
endpoints, the user might not easily navigate between them. This is due to the
auto minimize of subcategories in the side pane.
