@AliAsgharGill

# **NextJS**

## **Server components**

### In NextJs all components are server components by default.

### the have ability of running tasks and reading files,

### they don't have ability to use Hooks or handle user interactions

## **Client Components or Traditional components**

### To create clint components need to write 'use client'.

### they have no ability of running tasks and reading files,

### It have ability to use Hooks or handle user interactions

## **Routing**

### it have file based routing system

### url path are defined by file and folders in codebase

### All routes must be placed **inside app folder**

### Every file that corresponds to a route the file must name as page.tsx or page.js

### Every folder corresonds to a path segement in browser URL

## **Nested**

### to create nested routing create another folder inside the folder and file page.tsx and then access it with name of folder

## **Dynamic Routing**

### To do dynamic routing need to write folder name inside brackets [], like [productId] and then make file inside it page.tsx

### Need to use **params** parameter for id that's in the URL of specific product details.


## **Nested Dynamic Routing**
### Need to do make another folder e.g reviews and then one more inside it but with brackets like [reviewId] and page.tsx  and now need to use params for both proudctId and reviewId inside page.tsx