# Deep Search feature

Investigate adding Deep Search to NetApp's Swagger UI.

## Determine where a search feature could be implemented

## Determine how a search feature could be implemented

- Search box implementation
    - Implementing the actual search box itself in the UI -- where should it go, real-time search vs query button, etc.
- Search functionality implementation
    - How will the search feature actually function -- what portions of the YAML file will it query?

## Determine the basic functionalities the feature would have

- Real-time search vs the user types query and presses button
- Return methods that have matching search string
- How will we display the search results?
    - Pull the methods to the top of the page and highlight matching phrases

## Determine the aspects/attributes of the YAML file that are relevant for a deep search feature

*Sample code block from the yaml file NetApp provided:*

```yaml

    delete:
      tags: [ storage ]
      description: |
        Deletes a volume. If the UUID belongs to a volume, all of its blocks are freed and returned to its containing aggregate. If a volume is online, it is offlined before deletion. If a volume is mounted, unmount the volume by specifying the nas.path as empty before deleting it using the DELETE operation.
  
        ### Related ONTAP commands
        * `volume delete`
        * `volume clone delete`
  
      operationId: volume_delete
      parameters:
        - name: uuid
          in: path
          description: Unique identifier of the volume.
          required: true
          type: string

```

*We need to discuss if we want to pick specific attributes or iterate through all of them in the yaml file. Here is the list of attributes that could be useful for the deep search feature:*

- `tags`

    Compare the user provided search word with the value of `tags` key. For example if the search word is `storage` the search will return all the methods that have `storage` as a `tags` value.

- `name`

    `parameter` key has the list of parameters as value. Each list element represents a dictionary where one of the key is `name`. We could compare its value with user provided search phrase, and if the match is found return the method as a search result.

- `description`

    The value of `description` key is usually a string that describes a method or parameter. We could look for the keywords that the user provided inside the description string. The limitation is that the efficiency may depend on how specific the user provided search word is.

- Operation names such as `get`, `post`, `delete` etc.

    When the user types `get`, the search feature would return all the methods with `get` operation.
