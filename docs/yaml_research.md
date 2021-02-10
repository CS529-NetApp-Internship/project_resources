# YAML Investigation Findings

## Major Takeaways

- The YAML is the file that supplies the data to the [ONTAP REST API](https://library.netapp.com/ecmdocs/ECMLP2856304/html/index.html#/).
- The index.html file is the one that visualizes and organizes the data from the YAML file.
- All of the description tags are written in Markdown and HTML.
- index.html is generated through the arguments in the YAML or JSON files.

## YAML Organization

- The sample file sent by NetApp includes the API paths for the volumes. These
  endpoints are organized in the `tags` argument for the general description. and
  in the `paths` argument for more detailed description of each endpoint

## Questions

- What is the `definition` argument used for?
