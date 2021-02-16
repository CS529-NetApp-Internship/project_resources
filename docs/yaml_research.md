# YAML Investigation Findings

## Major Takeaways

- The YAML is the file that supplies the data to the [ONTAP REST API](https://library.netapp.com/ecmdocs/ECMLP2856304/html/index.html#/).
- The index.html file is the one that visualizes and organizes the data from the YAML file.
- All of the description tags are written in Markdown and HTML.
- index.html is generated through the arguments in the YAML or JSON files.

## YAML Organization

- General API specification in YAML([for more info](https://swagger.io/docs/specification/2-0/basic-structure/)):

  - Metadata: version, title, description
  - BaseURL: url for the API calls
  - Consumes/Produces: define the MIME types supported by the API
  - Paths: individual endpoints
  - Parameters: parameters for the operations
  - Responses: status codes and example responses
  - Input/output models: define the common data structures used in API
  - Authentication: authentication for API

- The sample file sent by NetApp includes the API paths for the volumes (cloud, cluster, etc.). These
  endpoints are organized in the `tags` argument for the general description and
  in the `paths` argument for more detailed description of each endpoint.
    - Within the `tags` argument we can see that there is a `name` and a `description` for each item/volume inside these tags. This provides the main information     seen in headers for each volume on Swagger UI.
      - In addition to the standard `name` and `description`, these tags will sometimes include a `x-ntap-long-description` which will provide a more detailed `doc` or longer description for a given tag. This `x-ntap-long-description` is written in Markdown.
    - Within the `paths` section of the YAML file the paths for each portion of the API can be found and then you can get more into the specifics of these paths.
      - To make it a bit easier to understand we are just going to give a basic example. For instance, the first path in `paths` of the NetApp YAML file is `/storage/volumes/`.
        - A `x-ntap-long-description` is the first arugment within this path and is used to create the `doc` for `storage/volumes`.
        - A `get` response tag is than the next argument within this path.
          - Within this we can find a `description` tag describing the response tag in a markdown format, an `operationID`, `parameters` which reference the set `volume` parameters and external ones in the `parameters` section at the bottom of the YAML file, and `responses` with the response codes. 
        - A `post` tag follows in the same format as described above. Most paths do as well for other volumes like cluster, `storage/qtrees`, etc.

## Read/Write APIs in a YAML syntax

- [Swagger Editor](https://editor.swagger.io/) can be used for writing and editing the yaml file that has the API specifications. The tool can be run locally and is also accessible on the Web. This tool can be used for our project during initial exploration before we start adding features to the Swagger UI.

## Questions

- What is the `definition` argument used for?
- How does external definition via `$ref` work in the yaml file?
