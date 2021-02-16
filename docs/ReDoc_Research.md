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

# SearchBox component

## Imports
- React is a library in Javascript that specializes in UIs.
- IMenuItem is an interface in MenuStore that holds the blueprint for menu items.
- SearchStore is a class that actually adds menu items to a SearchWorker, which is a class derived from the default class Worker.
- MenuItem is a class that facilitates the operations of the search box itself using React. If we could change what events are listened to in ReDoc so that it automatically shows the results as we type, we could change what events are listened in Swagger.
- MarkerService is a class that in this context uses the search results as markers. Depending on what happens, it can add or remove the markers.
- SearchResult is an interface that holds the blueprint for the search result, comprising fields called meta and score.
- `bind` and `debounce` are part of `decko`, which is apparently a decorator that simplifies code writing, such as using the `this` constant and throttle calls.
- PerfectScrollbarWrap is a function that returns the scrollbar functionality from an OptionsProvider.

## Exports

## SearchBox Class
