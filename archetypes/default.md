---
title: "{{ replace .Name "-" " " | title }}"
categories: ["products"]
date: {{ .Date }}
description: "Product Description"
shortDescription: "Short Description"
price: "0.00"
discountPrice: ""
productID: {{ now.UnixNano }}
thumbnail: ""
optionLable: ""
options:
    - ""
images:
    - ""
inStock: true
draft: false
---

