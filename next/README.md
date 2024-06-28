@AliAsgharGill

# **NextJS**

## **Folders name must be in lowercase**

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

### To make page that come instead of 404 default page need to make another file in **app** folder with name **not-found.tsx** name should be this, and style it as you want.

### we can also show it programmatically using function **notFound** and import it from **import notFound from "next/navigation"** and then call(invoke) it in certain condition, e.g if we have product page and if id of product is grater then 1000 then show NotFound Page.

# **CoLoction**

### In simple words making another function inside page.tsx without exporting.

### A route is publicly stabled until a page.tsx file is in the folder, if no page.tsx file then folder is accessible but it will show 404 page.

### if we made an page.tsx file and make another function without exporting it will not show any error, but when we add a function with export default it will not show any error.

# **Private Folders**

### Private folder mean folder itself and all its sub-folders are excluded from routing

### To make private folder simply name it with underscore ("\_") or "%5F" like, "\_dashboard", "\_about", "\_blog", "\_products" these all are the example of private folders. Backward slash is added automatically when file saved, no need to write backward \ with name.

### Why Private folders?For separating UI logic from routing logic

# **Route Groups**

### Route groups mean multiple folder in that have routes like

### (auth) Auth folder cover with parentheses so in URL no need to write name of auth folder, we can directly access files inside auth folder. here we have created, login, signup, forgot-password

# **Route Group Layout**

### Now we have created a folder (with-auth_layout), and make a file layout.tsx in it, so now folder in (with-auth-layout) will get affect of this layout.tsx

### To selectively apply a layout to certain segments while leaving others unchanged

### To organize your project in a manner that does't affect the URL

# **Layout File**

### Layout mean component should accept a children prop that will be populated with child during rendering. e.g, In app folder layout.tsx come with function have parameter children that render function of page.tsx file.

### we can add header and footer in this file.

### Fun Fact: By default file come in app folder with name layout.tsx, if we delete it, it will again come.

# **Nested Layout File**

### If we want to create layout for specific folder or we can create layout file in that folder. Here we will create for products in [productId] folder, so we can access this layout in all product details. I have added **Featured Products** inside layout of it. Now if we visit this page we will se feature product component below of it.

# **Routing Metadata**

### Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users.

### NextJs introduce the metadata api which allows you to define metadata for each page

### Metadata ensures accurate and relevant information displayed when your pages are shared or indexed

## _Configuring Metadata_

### Export a static Metadata object

### Export dynamic generateMetadata function

## _Metadata rules_

### _layout.tsx_ and _page.tsx_ both can export Metadata, but Metadata of _layout.tsx_ applied to all pages in the layout and Metadata of _page.tsx_ only applied to that file or page.

### Metadata is read in order, from root level down to the final page level, e.g. About page is deeper then root layout so it will get metadata from layout of about if it have separate layout.

### When there's Metadata in multiple places for the same route, they get combined but page metadata will replace layout metadata if they have same properties(title, description)

## _Page Metadata precedence or priority is higher then layout Metadata_

### now we will write metadata in about folder.

## **Dynamic Metadata**

### Dynamic Metadata common case where we using dynamic routing [anyPage], now we will use it in [productId] page.tsx and also need to write types of it.

## we can not export both Metadata object and generateMetadata function from the same route segment

# **Title Metadata**

### The title field's primary purpose is to define the document title

### Title can be either a string or an object, to use an object its is necessary to import {MetaData} from 'next' and use it with metadata as type, we will do it in root _layout.tsx_

### If want to use Title as object it have _three properties, absolute, default and template_.

### absolute : if we are in children folder or file and want to provide title that ignore template of root layout we will use absolute, like we did in blog page, also we can use absolute only but default and template can not be use only, need to use both or with absolute.

### default : if children page or layout don't have any title, then children will get this title

### template : template: "%s | Next App", in place of %s current folder title will come and Next app from the root layout

### Default is useful for child, e.g if child don't have Title it will get it default title from here.

# **Link**

### Link is used to navigate between pages as anchor <a>.

### In link replace attribute or prop when Link have replace prop, replace prop replaces current history state of URL

# **Active Links**

### we are using it in _layout.tsx_ of root

### usePathname to highlight active link and it is hook so we need to make page client side using 'use client'

# **Big Change => We want to use client for links of header and server side metadata for homepage title so we made two separate files in app folder made _metadata.ts_ and _Rootlayout.tsx_ and then call both in _layout.tsx_ that is main layout, so to use both client side and server side component we have applied this method. **

# **Navigate Programmatically**

## We need to use hook useRouter from next/navigation and then onClick of button or any other component need to use router.push("/") to redirect user to homepage.

### we can use router.push("/"), router.refresh() to refresh current page, router.back(), router.forward("/product"), also router.replace(), replace work same as attribute in Link, it will era se history.

# **Template**

## _Note:_ layout file only mount/change the part representing the content of newly loaded page and keep all the common components untouched, like search bar on any input above the shared layout components, layout don't mount/change shared components, **But** Templates change/mount the shared component. In _layout.tsx_ like we did now made an input element and stored its value in state and then we switch between same layout pages, it does not change the input component because its above the children in layout.tsx, but if use _template.tsx_ it will change the shared component.

## Templates commonly not used.

## Templates are similar to layouts in the wrap each child layout or page,

## But when templates, when a user navigate between routes that share a template, a new instance fo the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized

# **Loading**

## Need to make _loading.tsx_ file in the page or group where we want to show loading. like here we make for blog page.

## This file automatically wrap page.tsx file and all the children within react suspense boundary.

## we can use skelton and spinners in it.

## _Benefits_

## 1. We can show loading state as soon as a user navigate to a new router, it make user-friendly and user now his request is acknowledge and loading.

## 2. NextJs allow the creation of shared layouts that remain interactive while new route segments are loading. and user can intrect with other part of app, like navbar etc.