# ReDoc Research

## Overview
This is an analysis of the ReDoc API visualizer that allows for projects to publish their API as an interactive documentation. It will act as an inspiration when building upon the ONTAP REST API.

## Available Features
- Server Side Rendering
- Interactive documentation for nested objects
- Deep Search
- Code samples for each request

### Features Missing Currently In Swagger
- Interactive documentation for nested objects
- Deep Search

## Pros / Cons
### Pros:
- The code to execute for a particular request is already there without needing to be manually selected.
- You don’t need to manually execute the code to get a particular result; it already has the output for some generic parameters.
- The description of the request is clear along the left-hand side.
- It has a deep-search feature that returns all of the requests with the keyword.

### Cons:
- The different types of requests aren’t grouped together within each endpoint.
- For a fair amount of requests, not all of the possible results of the execution of those requests are shown. For example, some requests only show the 200, and others only show the 400 or 405.
- You can’t execute any code within the request.
