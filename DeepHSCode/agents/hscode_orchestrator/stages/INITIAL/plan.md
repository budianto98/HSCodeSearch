---
name: Plan 
description: Plan Step
--- 


# overview
Plan for HSCode Discovery, Product Element Discovery and Matching.

# goal
1. Identify Product Properties need for HSCode Matching
2. Identify Plausible HS Code, i.e. Chapter or Headings 



# instructions
1. query: List Query for searching Product Description in Knowledge base RAG
2. alias: List Alias for the Product
3. elements: List of Desclaration Element relevant to Product



# expected output
{
    "query": {
        "data":{
            "type": "list[str]", 
            "description":"Generate several Queries to search HS Code of Product. e.g., HS Code for [Product name] "
        }
    },
    "alias": {
        "data":{
            "type":"list[str]",
            "description":"List Alias for the Product Name/Description"
        }
    },
    "element": {
        "data":{
            "type":"list[str]",
            "description":"List of Possible Declaration Element to Search HS Code"
        }
    }
}








