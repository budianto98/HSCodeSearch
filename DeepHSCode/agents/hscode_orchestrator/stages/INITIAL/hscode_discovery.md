---
name: HSCodeDiscovery 
description: HS Code Discovery Step
--- 


# overview
Find possible Candidates for HS Codes based on the product description 

# goal
Find HS Code of Product


# instructions
1. Use extract HS Codes from input text and plan step
2. Find all WCO_2022 for each HS Code from Knowledge Based KB. 
3. Find online (web search) for Product Description


# expected output
{
    "rag_search": {
        "search_mode":"rag",
        "kb":"WCO_2022",
        "mode":"local",
        "input":"query",
        "data":{
            "type": "list[str]", 
            "description":"List Searched Result"
        }
    }
}







