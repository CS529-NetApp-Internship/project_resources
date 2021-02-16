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

- The sample file sent by NetApp includes the API paths for the volumes. These
  endpoints are organized in the `tags` argument for the general description. and
  in the `paths` argument for more detailed description of each endpoint

## Read/Write APIs in a YAML syntax

- [Swagger Editor](https://editor.swagger.io/) can be used for writing and editing the yaml file that has the API specifications. The tool can be run locally and is also accessible on the Web. This tool can be used for our project during initial exploration before we start adding features to the Swagger UI.

## Questions

- What is the `definition` argument used for?
- How does external definition via `$ref` work in the yaml file?
