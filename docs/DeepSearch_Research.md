# Deep Search feature

Investigate adding Deep Search to NetApp's Swagger UI.

## Determine where a search feature could be implemented

Add your notes here

## Determine how a search feature could be implemented

Add your notes here

## Determine the basic functionalities the feature would have

Add your notes here

## Determine the aspects/attributes of the YAML file that are relevant for a deep search feature

Sample code block from the yaml file NetApp provided

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

List of attributes that could be useful for the deep search feature

- `tags`

    Compare the user provided search word with the value of `tags` key. For example if the search word is `storage` the search will return all the methods that have `storage` as a `tags` value.

- `name`

    `parameter` key has the list of parameters as value. Each list element represents a dictionary where one of the key is `name`. We could compare its value with user provided search phrase, and return as a search result.

- `description`

    The value of `description` key is usually a string that describes a method or parameter. We could look for the keywords that the user provided inside the description string. The limitation is that the efficiency may depend on how specific the user provided search word is.

- Operation names such as `get`, `post`, `delete` etc.

    When the user types `get`, the search feature would return all the methods with `get` operation.