# YAML Parsing, Matching, and Ranking Algorithm

## Input

The input to this algorithm is a YAML or JSON file in addition to a keyword to
be searched for.

## Output

The output is a data structure containing YAML keys in `paths` which include a
match to the keyword throughout its sub dictionaries/maps. The data structure
also contains number of matches and the level where the first match was found.

## Approaches

### Approach I Minimal

```
parseYaml(keyword, config_path):
1. load YAML from file
2. generate Regex for keyword (would be Global)
3. Iterate through first level keys:
  4. Compare regex to the key itself
    - if match:
        - results[key][rank] = 1
        - results[key][matces] += 1
    - end if
  5. Stringify subdictionary
  6. Compare regex to the string
        parse_key()
  7. Update matches
```

#### Issues

- The level where the match occurred remains unknown
- Created string could be very messy and difficult to manage
- Can lead to results not ordered appropriately based on importance

### Approach II In Depth using Object Oriented Programming storage and tracking

#### Defining Object Variables and Functions

```
Endpoint Object:
Variables:
  - MainKey => String
    - First level key to access this endpoint from YAML Paths key
  - FirstMatchLevel => int
    - The Level at which the first match is found (the less the number the closer to the outer key)
  - TotalMatches => int
    - Counts how many matcher were found across all levels of this endpoint

Methods/Functions:
  - getReport() : returns {MainKey: "",
                           FirstMatchLevel: ""
                           TotalMatches: 0}
  - parseKey(dict => object, currentLevel => int):
    - Iterate through each dict key as i
        - check if there is a match with the key string:
            - if true:
                - this.TotalMatches += 1
                - this.FirstMatchLevel = currentLevel IF  currentLevel < this.FirstMatchLevel
        - Check if the type of value in the key is Object/dict
            - if true:
                - Recursive Call: this.ParseKey(dict=object.i, currentLevel=currentLevel+1)
            - if false:
                - Stringify the value
                - Look for regex matches
                - if matches found
                    - this.TotalMatches += 1
                    - this.FirstMatchLevel = currentLevel IF  currentLevel < this.FirstMatchLevel
```

#### Main Program Flow

```
parseYaml(keyword, config_path):
load YAML from file into variable config_content
Generate Regex for keyword (would be Global)
Initialize empty report dictionary = {}
for each key in config_content.paths:
    - Initialize Endpoint Object myEndpoint using (key, 0, 0)
    - myEndpoint.parseKey(config_content.paths.key, 0)
    - report.add(key.toString, myEndpoint.getReport())
```

#### Issues

- Might not be very efficient since it's very in depth
- Possible to cause a stack overflow error if recursion runs amuck
- Could take more memory space with the new objects being created
- Possibility to be too complex => difficult to debug
- Unclear if this design can be easily implemented in javascript
