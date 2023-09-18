# 0x00. Pagination

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/3646eb02de6527ca5d83.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T172833Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b20ca675077947dc5d4f43742ffeca18a6a5334e8e5b43c189b15b9b47b69989)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/746187b76bea1f46030e.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T172833Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=670cdd20ee708cc38b58b81323a5c5d7639b2fca3e042838e74a2a1b6f97bae1)

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/665ce871c2ecc66a8e71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230915%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230915T172833Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=673fab3a8e16e0c5e30a4f67376a4e1479afb5f507f9661bffdd46f24db029ab)


## Learning Objectives

    How to paginate a dataset with simple page and page_size parameters
    How to paginate a dataset with hypermedia metadata
    How to paginate in a deletion-resilient manner

## Requirements

    All your files will be interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7)
    All your files should end with a new line
    The first line of all your files should be exactly #!/usr/bin/env python3
    A README.md file, at the root of the folder of the project, is mandatory
    Your code should use the pycodestyle style (version 2.5.*)
    The length of your files will be tested using wc
    All your modules should have a documentation (python3 -c 'print(__import__("my_module").__doc__)')
    All your functions should have a documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)'
    A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
    All your functions and coroutines must be type-annotated.

## Setup: Popular_Baby_Names.csv

[use this data file](https://intranet.alxswe.com/rltoken/NBLY6mdKDBR9zWvNADwjjg) for your project