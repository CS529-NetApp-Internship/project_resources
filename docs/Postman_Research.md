# Postman Research

## Overview
Postman is a collaboration platform for API development, teams can easily join the website and work to create, document, and test their APIs. It is a bit more clean in terms of design than Swagger

![Postman using Swagger Petstore example.](images/postman1.png)
## Available Features

Quick Rundown:
- Postman has built—in support for popular data formats such as OpenAPI, GraphQL, and RAML. Also works, though not as well with JSON and YAML.
  - Import a singular API from a YAML or JSON formatted file.
  - Import a collection using these formats or a link, though errors may arise.
- Has a test/run the API feature.
- Can expand/collapse specific blocks of code or requests.

When you import an API from a YAML file you can then add a brief summary with an accompanying more in-depth description of the API (in markdown).

### Features Missing Currently In Swagger

There are a variety of features that Postman has that Swagger is missing:
- Postman has an online UI for developers to update their APIs easily, without any backend work.
- Postman has version control for APIs.
- Has more of a deep search functionality, though I feel it is far from perfect while being better than what is currently offered by Swagger.
- Cleaner design.
- Easy-to-use website UI that allows API developers to update things right on the web.
- Automated testing for APIs.

## Pros / Cons
### Pros:

- Version Control
- Free
- Better and easier to use API tester/runner.

### Cons:

- No full-featured Expand or Collapse, can just do it on specific code blocks or request groups, not all entities.
- More support for JSON than YAML files.
- Even when it converts the JSON file for say the Swagger Petstore example to a Postman collection, it does not carry over the descriptions from Swagger. This means that one would have to go back to the Swagger UI and manually add these descriptions for different requests or portions of the project.
