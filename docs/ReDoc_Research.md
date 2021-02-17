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

- The searchbox component creates two interfaces `SearchBoxProp` and
  `SearchBoxState` which are used to create an instance of the object
- The interfaces are also used to create a React PureComponent in the
  `SearchBox` class
- The class also supports helper methods to clear the results and to set the
  results to a list of terms
- Anther important function is the `searchCallback` which calls the search
  method and displays the results

## SearchBox Class

What we're interested in is how the results are displayed once you enter. This is the code that listens for keyboard events.

```
handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
   if (event.keyCode === 27) {
     // ESQ
     this.clear();
   }
   if (event.keyCode === 40) {
     // Arrow down
     this.setState({
       activeItemIdx: Math.min(this.state.activeItemIdx + 1, this.state.results.length - 1),
     });
     event.preventDefault();
   }
   if (event.keyCode === 38) {
     // Arrow up
     this.setState({
       activeItemIdx: Math.max(0, this.state.activeItemIdx - 1),
     });
     event.preventDefault();
   }
   if (event.keyCode === 13) {
     // enter
     const activeResult = this.state.results[this.state.activeItemIdx];
     if (activeResult) {
       const item = this.props.getItemById(activeResult.meta);
       if (item) {
         this.props.onActivate(item);
       }
     }
   }
 };
```

When you press enter, the endpoints show up as search results. Key code being 13 represents pressing enter on the keyboard. If we could somehow change it so that it does this process automatically without using the condition of `event.keyCode === 13`, then we're all set with the feature of automatically showing results and having the deep search. Unfortunately, this is ReDoc, and the ONTAP REST API having the same Typescript is a pipe dream. However, to look further into how ReDoc compares the search term to the other endpoints, we'll probably have to look at the "markers" that are made. The following is the return statement that displays the search results.

```
return (
      <SearchWrap role="search">
        {this.state.term && <ClearIcon onClick={this.clear}>×</ClearIcon>}
        <SearchIcon />
        <SearchInput
          value={this.state.term}
          onKeyDown={this.handleKeyDown}
          placeholder="Search..."
          aria-label="Search"
          type="text"
          onChange={this.search}
        />
        {results.length > 0 && (
          <PerfectScrollbarWrap
            options={{
              wheelPropagation: false,
            }}
          >
            <SearchResultsBox data-role="search:results">
              {results.map((res, idx) => (
                <MenuItem
                  item={Object.create(res.item, {
                    active: {
                      value: idx === activeItemIdx,
                    },
                  })}
                  onActivate={this.props.onActivate}
                  withoutChildren={true}
                  key={res.item.id}
                  data-role="search:result"
                />
              ))}
            </SearchResultsBox>
          </PerfectScrollbarWrap>
        )}
      </SearchWrap>
    );
```
