# YAML/JSON Parsing, Matchin, and Ranking Algorithm

## Input

The input to this algorithm is a YAML or JSON file in addition to a keyword to
be searched for.

## Output

<!-- TODO: revise this description -->
The output is a data structure containing found matches ranked according to
frequency of keyword occurrence and level the keyword was found in.

## Approach

## Implementation

__DRAFT__

parse(keyword, config_path):
Results variable should be created with this structure:
results = {matched_key: {rank:3, matches: 13}}

1. load YAML from file
2. Set contents to an immutable global variable
3. generate Regex for keyword
4. Iterate through first level keys:
    5. Compare regex to the key itself
        - if match:
            - results[key][rank] = 1
            - results[key][matces] += 1
        - end if
        parse_key()


parse_key(map, key):
    1. if key is iterable:
            - 
