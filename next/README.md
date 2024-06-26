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

## **Error**

## Lets introduce an error scenario in [reviewId] page file page.tsx using getRandomInt function it will generate number and invoke it with getRandomInt(2) so it will generate only 0 or 1 if number is one the we will show error.

## Automatically wrap a route segment and its nested children in a React Error Boundary.

## Isolate error to affected segments while keeping the rest of application functional

## Create error UI tailored specif segments using the file system hierarchy to adjust granularity

## Add functionality to attempt to recover from an error without a full page reload

## example in products/reviews

# **Recovering From Errors**

## we will do it using _reset function_ that we can destructure it from

## make both _error.tsx_ and _page.tsx_ file client side component using _'use client'_

## Make a button in _error.tsx_ file with name try again and onClick of it invoke reset function and make _page.tsx_ client component.

## example in products/reviews

# **Handling Errors In Nested Routes**

## Error bubble up or come up to the closest error boundary

## An _error.tsx_ file will cater to errors for all its nested child segments

## By positing _error.tsx_ file at different levels in the nested folder of a route, you can achieve a more granular level of error handling.

## Granular error handling refers to managing errors with varying levels of specificity, from broad application-wide errors to detailed errors within specific routes or components. This approach improves user experience and aids in efficient debugging.

## 100 of 1, because error occur/bubble up/come up to he closest error boundary, so make _error.tsx_ file secret for each route segment, else if error come in nested children file it replace the whole UI of children file _pages.tsx_ with _error.tsx_ file. So use _error.tsx_ in children folders it make error handling easy.

## example in products/reviews

# **Handling Errors in Layouts**

## An _error.tsx_ file will hadle error from all its children segements.

## The error boundary does not catch errors thrown here because it's nested inside they layout component, to handle error of _layout.tsx_ file need to move _error.tsx_ file to its parent folder, then instead of crashing file error, it will show error message.

## Let's make an _error.tsx_ file inside the [productId]

## Lets introduce an error scenario in [productId] page file page.tsx using getRandomInt function it will generate number and invoke it with getRandomInt(2) so it will generate only 0 or 1 if number is one the we will show error.

## We need to make our _page.tsx_ file client side

# **Parallel Routes**

## Parallel routes in NextJs defined using a feature known as _slots_

## Slots help structure our content in modular fashion

## To define a slot, we use the "@" e.g. _@folderName_ naming convention, now this folder will known as slot.

## IMPORTANT: Slots always used as _prop in layout with its folder name not function_.

## Each slot then passed as a prop to the layout that's in same folder, or in other words to its corresponding _layout.tsx_ file.

## Now we made three slots inside the complex-dashboard route and now they are passed as prop as their _folder name_ like name _page.tsx_ or its function file to _layout.tsx_ file. like @revenue will be revenue, notification as notification and users as users.

## FUN FACT: children prop that we get every time in component props is also a slot.

## **Benefits of Parallel Routes**

### A clear benefit of parallel routes is their ability to split a single layout into various slots, making the code more manageable.

### _True benefits of parallel routes following:_

### Independent route handling

#### if we made slots use then in layout, each slot of layout, have its own loading and error states. Like we made _@users_, _@revenue_ and _@notification_ slots these three have their own loading and error states.

#### This Granular control is particularly beneficial scenarios where different sections of the page load at varying speeds or encounter unique errors.

#### 100 of 1. All slots in _layout.tsx_ have isolated from each other, if one got error other will not get effected and if one is loading it will not effect others.

### Sub-navigation

#### Each slot of your dashboard can essentially _function as mini-application_, complete with its own navigation and state management

#### This is especially useful in complex application such as our dashboard where different sections serve distinct purposes.

## **Unmatched Routes**

### _Navigation From the UI_

### In the case of navigation within the UI, Nextjs retains the previously active state of a slot regardless of changes in the URL. => Mean when user move from notifications slot to its children archived folder other slots of _layout.tsx_ will not change, they will retain same, but when user is on children folder like here _notification->archived_ and reload the page then other slots will get affected and can not show data, in this case _default.tsx_ come. _default.tsx_ will be shown of these slots.

### _Page reload_

### NextJs immediately searches for a _default.tsx_ file within each unmatched slot.

### The presence of this file is critical, as it provides the default content that Next.js will render in the user interface.

### if the _default.tsx_ file is missing in any of the unmatched slots for the current route, Nextjs will rnder a 404 error.

### _default.tsx_

### The _default.tsx_ file in the NextJs serves as a fallback to render content when the framework cannot retrieve a slot's active state from the current URL.

### We can design whatever we want to show in _default.tsx_, but its prefer to use _page.tsx_ because it will serve same UI as it default have.

## **Conditional Routes**

### Conditional Routing where we can check condition, if user is login then show particular pages, or parts else not.

### if conditional routing is working make sure to restart the server.

## **Intercepting Routes**

### Intercepting routes allow us to intercept or stop the default routing behavior to present an alternative view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads.

### This is helpful if we want to show a route while keeping the context of the current page.

### _Intercepting Routes Conventions_

### To create an intercepting route, At the same level create a new folder with same name of the route we want to intercept, like here we want to intercept folder with name _f2_ so we need to make more folder at same level with name (.)f2, then create page.tsx in it.

### Intercepting routes allow us to load a route from another part part of application within in the current layout. This is helpful when want to we dispaly the content of the route without user switching to a different context.

### (.) to match segments on the same level

### (..) to match segments one level above

### (..)(..) to match segments two levels above

### (...) to match segments from the root app directory

# **Parallel Intercepting Routes**

### We have implemented both Intercepting and Parallel Intercepting Routes routing in photo-feed route/folder.

<<<<<<< HEAD

# **Route Handlers**

### We can create custom request handlers for our routes using a feature called route handlers.

### Unlike page routes which respond with HTML content, route handlers allow you to create _RESTful_ endpoints, giving us full control our response.

### Route handler also great for making external API requests

### Route handlers run server-side, ensuring that senstive info like keys remain same and never gets shipped to the browser.

### Route Handlers are equivalent of API routes in Page router

### NextJS simplify routing on Front-end and Back-end

### _IMPORTANT_: if we have both files _route.ts_ and _page.ts_ in same folder then _route.ts_ will executed in the browser by default. to make it correct need to create a folder with _api_ folder in that particular folder and move _route.ts_ in _api_ folder. like we did in /me route/folder: e.g me->api>route.ts

# **SIMPLE CRUD**

### To make GET request simply make an asynchronous function in _api/route.ts_ file or any other file you want to make request, and then return Response.json(endpintHere)

### To make POST request simpl make an asynchronous function, see code exampole

=======

# **Caching in Route Handlers**

### we create a time route and make route.ts file then return current localTime, then check it and its updating automatically whenever refresh site, but when refresh after _npm run build_ and then _npm run dev_, time is not updating automatically because its getting time from cache. So we need to make component dynamic using this command, _export const dynamic = "force-dynamic";_ Note: by default the value of dynamic is _auto_ but we used _force-dynamic_ so ensuring the handler is executed for each request made by user. if we know we now rebuild our site using _npm run build_ and then _npm run dev_ then we will get time current time every time we refresh site.

### route Handlers are cached by default when using GET method with the Response object in Next.js

### How to opted out of caching?

#### - dynamic mode in Segment Config Option

#### - using the Request object with the GET method

#### - employing dynamic function like headers() and cookies()

#### - using nay HTTP method other than GET

# **Middleware**

### middleware file should be only one in a project.

### middleware in NextJS is a powreful fetue that offers a robust way to intercept and control the flow of reqests and responses within your applications.

### it does this at gloabl level significantly enhancing features like redirection, URL rewrites, authentication, header and cookies management and more.

### Middleware allows us to specify paths where it will be active

#### - Custom matcher config

#### - Conditional statements

# **Routing Summary**

### Till we have learned these topics of routing

### Route definition

### Pages and layouts

### Dynamic routes

### Route groups

### Linking and Navigation

### Handling errors in routes

### Parallel and Intercepting routes

### Route handlers and middleware

# **Rendering**

## **CSR**

### CSR => Used by React, in it server send HTML AND JS files to client and it CSR render the whole site in the browser so initial loading time increased, and in CSR server only send a single div in Html file that is not helpul for SEO, parsing and other etc.

## **SSR**

### To solve CSR problems SSR come, it render the HTML page on server site and then complete render HTML file and JS file send to Client(browser). and complete file come with metadata so it improve SEO, and loading time decrese due to rendering on Server Site.

## _Hydration_

### Sending request by client(browser) and then Server response to it by providing Render Html and JS file, this process in known as Hydration. Content should be same as on the Client as it was on the Server, no changes if changes happen it will show error of hydration.

## _Server side solutions_

### 1- Static site generation (SSG)

### 2- Server side Rendering (SSR)

### _SSG_ occurs at build time, when the application is deployed on the server. This result in pages that are already rendered and read to serve. It is ideal for content that does't change often, like blog posts

### _SSR_ on the other hand, renders pages on-demand in response to user requests. it is suiteable for presonalized content like social meda feeds, where the HTML depends on the logged-in user.

### Server-side Rendering (SSR) was significant imporvement over Client-Side Rendering (CSR), providing faster intial laods and better SEO.

### _Drawback of SSR_

### 1- Having to load the data for the entire page

### 2- Load the JavaScript for the entire page, mean JS required for component need to be fully loaded before on the client side before the hydaration process start.

### 3- Hydration the entire page, mean same HTML and JavaScript load on client side as it was on the Server side. So all compoents need to be hydrated before they become inteactive.

### mean _Create all or nothing_ waterfall problem that spans from the server to the client.

### This is inefficient if some parts of APP are slower than other, as is often the case in real-world apps.

## **Solution**

### _Suspense SSR Architecture_

### Use the \*<Suspense fallback=<Loading Component Here, Spinner, Loading... etc.> > component to unloack major SSR featues:

### 1- HTML streaming on the Server

### 2- Selective Hydaration on the client

### Note: When client side send request initially to server for data, before getting initailly data from server it is _Non-intrective UI_, then Sever send _full HTML + Js fils_ then client display whole HTML and after completely loading the loaded JS bundle, then react proceed to add _Interective UI_

### For 1st drawback, This was helpful to solve one problem, HTML loading(streaming) on the sever, so we no need to fetch everything before show anything. we can speedup html delivery now but other problem is still remaianig.

### _The other chellange_

### Untill JS for the main section is laoded, client side app hydration cannot start,and if JS bundle for the main is large, this could significantly delaye the process

## \*_Code splitting_

## _To mitgate above challange need to use technique code splitting_, for 2nd and 3rd drwaback

### Part that is taking more time need to cover in _Suspense_ so react will not prevent the other page to _loading(streaming)_ and wait becuase of it and also keep it away from _hydrating_ until it get loaded.

### And using Lay Load for the component so it will be loaded when needed. e.g

const MyComponent = lazy(()=> import('./MyComponent.js'))

### This feature called _Selective Hydrating_,

### After these solution some challenge and problems will remain.

### 1- If file size increase user need to load more data and mor time required., An important question come here, _Should user rally have to downlaod so much data?_

### 2 -All components will undergo for hydration on the client side.This process can extend the loading time. An imporant come here, _Should all components be hydrated, even those don't need interectvity?_

### 3- In spit of server's superior capacity of hanlding intensive processing tasks, the buld of js execution will take's place on the user device, it can slow down process, especially on slow devices. An importnat question here: _Should so much of the work be done on the user's device?_

# **Solution: React Server Component**

### This approach aims to leverage the strength of both _Server and Client_ environments, _oprimizing for effciency, load times, and interactivity_

### This architecture _RSC_ introduces a dual-compnent model.

### 1- Client Components

### 2- Server Components

### THis distinction is not bases on th functionality of the components but ratr on where they execute and the specific environments they are designed to interact with.

### _Server components_

### It reduce bundel size

### Direct access to server-side resources

### Enhanced Security

### Importve data fetching, elmeinated waterfall on client-side

### Caching

### Faster initali page load and First Contentful Paint

### Improve SEO

### Efficient Streaming(Loaidng/showing)

### Server components take charge of data fetcing and static rendering, whitel Clinet components are tasked with rendering the interactive elments of the application.

### The bbottom lin eis that the RSC architecture enables React application sot leverage the bes aspects of both server and client rendering.

# **Server and Client Components**

### _Server Components_

### By default all components in NextJS are Server components, and run only on the server.

### If we do console.log() in server component, we will output in terminal instead of browser console.

### But server components have some limitations, can't use Hooks(useState, useMemo, useEffect,..etc) and events(onClick, onChange ... etc).

### _Client Components_

### we need to use a directive "use client" to make any component client components. Now component can access the API of browser.

### Client Component once pre-render on server side then render on client side. To see once rendered on server side write console.log("Hello") and then go to client and see "Hello" in console but not in the terminal yet, to see in the terminal refresh the site in the browser then we can see value of console ("Hello") in terminal.

### Due client component once pre-render on server site helpful, user will HTML content screen instead of blank screen.

# **Server Rendering Strategies**

### Static Rendering

### Dynamic Rendering

### Streaming

## _Static Rendering_

### Static rendering is a server rendering strategy where we generate HTML pages at the time of building our application.

### This approach allows the page to built once, cached by CDN, and served to client instantly.

### This optimization also enables you to share the result of the rendering work among different users, resulting significant performance boost for application.

### Static rendering is particularly useful for blog pages, e-commerce product pages, documentation, and marketing pages.

### Static rendering is default rendering strategy in the app router.

### Static rendering is a strategy the HTML is generated at build item.

### Along with the HTML, the RSC payload is created for each component, and JS chunks are produced for client-sde component hydration in the browser.

### If we navigate directly to a page route, the corresponding HTML file is served.

### The route is created on client side using the RSC payload and JS chunks, without any additional requests to th server.

### All routes are automatically prepared at build time without additional setup.

# _Prefetching_

### Prefetching is a technique used to preload a route in the background before hte user navigate to it.

### Routes are automatically prefetched as they become visible in the user's viewport, either when the page first loads or as it comes into view through scrolling.

### FOr static routes, the entire route is prefetched and cached by default.

### When we load the homepage, NextJS prefetches the all the routes that's link is visible to viewport or when user scroll to that viewport which have link of another page, that route also get prefetched.

# **Dynamic Rendering**

### Dynamic rendering is a server strategy where routes are rendered for each user at request time.

### It is useful when a route has data that is personalized to the uer or contains information that can only be known at request time, such as cookies or the URL's search parameters.

### News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial.

## _How to use Dynamically Render_

### During rendering , if a dynamic function is discovered, NextJS will switch to dynamically rendering the whole route.

### In NextJS these dyamic function are: cookies(), headers() and serachParams Using any of these will opt the whole route into dynamic rendering at request time.

## _Dynamic rendering Summary_

### Dynamic rendering is a strategy where the HTML is generated at request time.

### NextJS automatically switches to dynamic rendering when it come across a dynamic function in the component, such as _cookies(), headers(), or the searchParams object_

### As a developer, we do not need to choose between static adn dynamic rendering. NextJS will automatically choose the best rendering strategy for each route based on the features and APIs used.

# _Streaming_

### Example a streaming route in app folder, we made a route streaming and import two components and one is coming after 2sec and second is coming after 4second so we cover them with suspense and fallback so it page can immediately get loaded, we can also use React.Lazy lazy load here.

### Streaming is a strategy that allows for progressive UI rendering from the server.

### Work is divided into chunks and streamed to the client as soon as it's ready. This enables user to see parts of the page immediately, before the entire content has finished rendering.

### Streaming significantly improve both the initial page loading performance and the rendering of UI elements tat rely on slower data fetches, which would otherwise block the rendering of the entire route.

### Streaming is integrated into the NExtJS App Router by default.

> > > > > > > 132d80528dbfe6acd5eaf9802325f8768aaa46bd

# **Server Only Code**

## _Server Only_ is a npm package. we use it to make component run only on server side.

### Like here below we have used Intentionally _utils/page.tsx_ In both side client and server, and its running but only want to run it on server. To prevent it from client-side if developer unIntentionally called _utils/pages.tsx_ in client-side then it will not work, and give an error, because we have simply _import "server-only"_ package.

### It increase security, reliability and performance.

### here we made a _utils_ folder and _page.tsx_ file in it and this file returning a _h1 tag and a message in console.log()_.

### Then we made two folder with _page.tsx_ files, one is _server-route_ and second is _client route_ and then imported function from _utils_, and use them. we can see output of _server-route_ in terminal and _client-route_ in browser console.

# **Third Party Packages**

### here we will install a package _react-slick_ using the this command _npm i react-slick slick-carousel @types/react-slick_

### Caution: Many third packages can make issues on server side components.

### If we want to use client-component on server side component then we need to make a seprate compnent that we want to use and import it in the sever component.

# **Create Context**

### we have made a themeProvider component and using it in Rootlayout, so this is 'use client' component and it cover the whole site, so the children client component will not be converted to client component, they still remamin server components.

# **Client Only**

### We need to install client-only package to convert any function to client function and that can only be used with client components, if it get called/invoked in any server component it will give error.

### Installation _npm i client-only_

### And use it with any component the we want to render only on client side.

# **Client Component Placement**

### Try to use 'use client' mostly at the leaf nodes, because it convert its children to client components also.

# **Interleaving Server and Client Components**

### Interleaving mean using both client and server components together in single file.

### Here we have created a route interleaving with file page.tsx file and created for components, two for client component and two for server component

### we have imported both client-component-one and server-component-one in interleaving route and use server components as children of client component.

### Server component can not execute directly need to covert them with opening and closing tags of client component.

### And fs(File system) can only by executed on server components.

# **Data Fetching In App Router**

### App router uses the React Server Component (RSC) architecture, which allows us to fetch data using either server components or client components.

### Its _advantageous to fetch data using server components_, as they have _direct access to server-side resources such as databases or file systems_.

### This is not taps into server's computational power and proximity to data sources for efficient data fetching and rendering but also minimizes the need for client-side processing.

### _Server components_ support various configurations for _caching_, _revalidating_, and _optimizing data fetching_.

### On the _client side_, data fetching is typically managed through third-party libraries such as _TanStack Query_ which offers its own robust APIs

# **Fetching Data with Server Components**

### Data stored in Server instead of browser if fetched with server component, if we change data of db.json file it get change and show changed data only on json-server not on NextJS site, These all because of NextJS caching functionality.

### Same as in react but separate files tackle with error and loading.

# **JSON server setup**

### It is necessary to use _npm i json-server@0.17.4_ this version of json-server if want to use.

### Make two file in root folder 1st _db.json_ and add some data in it, and 2nd _server.js_ file. and check data by visiting files.

### Command _node server_ used to run server.js file on localhost:3001

### we can also use _npx json-server --watch db.json_ to run server

### Data will get cached and get not changed even we change it form db.json file.

# **Opting Out Of Caching**

### For individuals data fetches, we can opt(ommit) out of caching by setting the _cache_ option to _no-store_ like this, we can write like this: _fetch("URL Here",{cache:"no-store"})_, now every time data will be fetched and get from data sources instead of cache.

### If there is two or more places in one file we are getting data using fetch and making one _{cache:no-store}_ remember to make it on lower then others.

### **IMPORTANT**: NextJS will not cache any data or any fetching request if any dynamic function(cookies(), headers(), searchParams) get invoked/called, All the request below dynamic function with not get cached even they don't have _{cache:no-store}_.

# **Request Memoization**

### Only apply to _GET_ request, memoization only apply within the React Component Tree.

### When we make request form a particular API e.g. *https://jsonplaceholder.typicode.com/users* in the _layout.tsx_ file, now if the the file related to this _layout.tsx_ or page.tsx file make request from same url *https://jsonplaceholder.typicode.com/users* React(NextJS) have stored data in _Request Memoization_. so it will save time and cost. In video at 4:20 its diagram is also define in detail.

### Request Memoization is technique that duplicates requests for the same data within a single render pass.

### This approach allows for re-use of data in a React Component tree, prevents redundant network calls and enhance performance.

### For the initial request, data is fetched from an external source and the result is stored in memory.

### Subsequent requests for the same data within the same render pass retrieve the result from memory, by passing the need to make the request again.

### This optimization not only enhances performance but also simplifies data fetching within a component tree.

### When the same data is need across different components in a route(e.g., in a layout, Page, and multiple components), it eliminates the need to fetch data at the top of the tree and pass props between components, Instead data can be fetched directly within the components that require it, without concerns about the performance implications of multiple network requests for the same data.

# **Fetching Data with Client Components**

### Many things same as react have just need to use _'use client'_,and some things client component not support like _Request Memoization, Caching and Revalidation_, so for these we will use _TanStack Query_.

### Instead of relaying on external api's, we can also call route handler on client component and it run on server side.