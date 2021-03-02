# Swagger UI Research

## Overview

[Swagger UI](https://swagger.io/resources/webinars/getting-started-with-swagger/) is an open source API visualizer, that lets you automatically generate interactive visual documentation from Open API specification.

## Available Features

- Endpoints grouped: such as `pet`, `store`, `user` in 
[Swagger UI demo](https://petstore.swagger.io/#/pet/getPetById)
- Expandable methods: Each method (`get`, `put`, `post`, `delete`) is expandable. By clicking you get a full description of the parameters with an automatically generated example
- Example values: example response code and values are available. Also you can switch between `Example value` and `Model`
- Parameter content types: available in json and xml and can be selected from the drop down menu
- Authorization: Before making any requests, authorize the session by clicking the Authorize button(lock sign) and complete  the information required
- Try it out feature: After cklicking `Try it out` button the example value in the Request Body field becomes editable
- Response: After clicking `Execute` button it shows curl code, Request URL, response code and response body. Buttons are avalibale to copy and download the request body. For curl code only copy feature is available

## Pros / Cons
### Pros:

- Dependency free: The UI works in any development environment, be it locally or in the web
- Browser support: Swagger UI works with all major browsers
- Open source and Customizable: Source code is accessible, and we can add new features 
- Open Api Specification(OAS) support: Visualize APIs defined in Swagger 2.0 or OAS 3.0

### Cons:

- User has to scroll down to navigate through the documentation, that may be inconveninet if the documentation is large
- Provides only curl code and it is only shown after you click `execute` button

## Swagger UI Project File Overview
Main Directories of Swagger UI:
- `/dev-helpers/`
- `/dist/`
- `/docs/`
- `/src/`
  - `/core/`
  - `/img/`
  - `/mako/`
  - `/plugins/`
  - `/standalone/`
  - `/style/`
- `/swagger-ui-dist-package/`
- `/test/`

### `/dev-helpers/`

Holds an `/examples/` directory that holds the YAML files used by Swagger! The `index.html` file can also be found here.

### `/src/`

This directory holds the source code for Swagger UI. This is where new features can be implemented.

Directory Overview:
- `/core/`
  - `/components/`
  - `/containers/`
  - `/plugins/`
  - `/presets/`
  - `index.js`
- `/img/`: contains logos; images
- `/mako/`
- `/plugins/`
- `/standalone/`
- `/style/`: contains all the `.scss` that style the Swagger UI web page
