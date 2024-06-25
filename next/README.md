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

### Need to do make another folder e.g reviews and then one more inside it but with brackets like [reviewId] and page.tsx and now need to use params for both proudctId and reviewId inside page.tsx

## **Catch all segments**

### its is best for making site like docs of any product.

### Segment mean value after slash, and if there is many slashes "/", mean there is multiple segments

    example:
    The /docs/feature route is composed of three segments:

    / (Root segment)
    docs (Segment)
    feature (Leaf segment)

### Catch all segments mean capturing all the segments that present in the URL

### In this example we make a folder docs and inside it another dynamic folder using brackets, and using rest operator like [...slug], we used slug here because it is very comman way to do it, and the make page.tsx file with simple component with name docs.

### 100 of 1, it capture all the segments and show all the details in the page.tsx that is inside [...slug]

### and then need to use params to display all of these segments in page.

### if we visit simply docs page we will get 404 error so resolve it need to use optional catch all segments, to do this cover slug folder with another brackets, like [[...slug]] and after we will get error on docs page, so to solve it, we will use optional keyword "?" in page.tsx, like (params.slug?.length === 1) with all conditions.

### if no route match it will return component of Docs component

# **Not Found Page**

## To make page that come instead of 404 default page need to make another file in **app** folder with name **not-found.tsx** name should be this, and style it as you want.

### we can also show it programmatically using function **notFound** and import it from **import notFound from "next/navigation"** and then call(invoke) it in certain condition, e.g if we have product page and if id of product is grater then 1000 then show NotFound Page.

