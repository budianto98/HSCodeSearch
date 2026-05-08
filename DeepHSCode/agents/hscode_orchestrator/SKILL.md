---
name: HSCode_Matching
description: HS Code Matching Agent will match the product description to the appropriate HS codes.
---

# Purpose
The Agent will receive a product description and will output a list of HS codes that are relevant


# Inputs
- Product Description

# Workflow
1. Plan [Plan]
2. HSCodeDiscover [HSCodeDiscover]
3. ProductElementDiscover [ProductElementDiscover]
4. HSCodeProductMatching [HSCodeProductMatching]
5. Review [Review]


# Output format
- Product Information
- Relevant HS Codes Information

