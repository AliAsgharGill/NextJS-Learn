---

# **Next.js Guide**

## **Folder Naming**
- Always use lowercase for folder names.

---

## **Components**

### **Server Components**
- By default, all components are server components.  
- They can:
  - Run tasks like fetching data.
  - Read files.  
- They cannot:
  - Use React Hooks.
  - Handle user interactions.  

### **Client Components**
- Add `'use client'` at the top to create a client component.  
- They can:
  - Use React Hooks.
  - Handle user interactions.  
- They cannot:
  - Run server tasks or read files.  

---

## **Routing in Next.js**

### **File-Based Routing**
- Routes are defined by files and folders in the `app` directory.  
- Files named `page.tsx` or `page.js` represent routes.  
- Folders define URL path segments.

### **Nested Routing**
- Create a folder inside another folder to create nested routes.  
- Add a `page.tsx` file in the nested folder.  

### **Dynamic Routing**
- Use brackets `[ ]` for dynamic routes, e.g., `[productId]`.  
- Access the route parameters with `params`.

### **Nested Dynamic Routing**
- Combine nested and dynamic routing:
  - Example: `[productId]/reviews/[reviewId]`.

### **Catch-All Routes**
- Use `[...slug]` to capture all URL segments after a certain point.  
- For optional segments, use `[[...slug]]`.

---

## **Custom Pages**

### **404 Page**
- Create a `not-found.tsx` file in the `app` folder to customize the 404 page.  
- Use the `notFound()` function for conditional redirection.

### **Private Folders**
- Prefix folder names with `_` or `%5F` to make them private.  
- Private folders are excluded from routing.

---

## **Layouts and Templates**

### **Layout**
- A `layout.tsx` file wraps components with shared elements like headers or footers.  
- Place it in a folder to apply to all child routes.

### **Nested Layout**
- Create a `layout.tsx` inside specific folders for localized layouts.

### **Template**
- Similar to layouts, but templates remount shared components.  
- Use templates when shared components need to reinitialize on route changes.

---

## **Routing Metadata**
- Add metadata for better SEO using:
  - A static `metadata` object.  
  - A dynamic `generateMetadata` function.

### **Metadata Rules**
- Layout metadata applies to all child routes.  
- Page metadata overrides layout metadata for the same properties.  

### **Dynamic Metadata**
- Define metadata for dynamic routes, e.g., `[productId]`.  
- Use either `metadata` or `generateMetadata`, not both.

### **Title Options**
- `absolute`: Ignores root layout templates.  
- `default`: Used if no title is defined in child pages.  
- `template`: Combines with child titles, e.g., `"%s | My App"`.

---

## **Navigation**

### **Link**
- Use the `Link` component for navigation.  
- Use `replace` to replace the current history entry.

### **Programmatic Navigation**
- Use `useRouter` for actions like:
  - `router.push("/")`  
  - `router.back()`  
  - `router.refresh()`  

---

## **Loading States**
- Add a `loading.tsx` file to display a loading state for routes.  
- Great for showing spinners or skeletons during data fetching.

---

## **Error Handling**

### **Error Pages**
- Add an `error.tsx` file to handle errors in specific routes.  
- Use `reset` in the error file for recovery options like "Try Again".

### **Nested Error Handling**
- Place `error.tsx` files at different levels for granular error management.  
- Errors bubble up to the nearest `error.tsx`.

---

## **Why Use These Features?**
- **Private Folders:** Separate UI logic from routing logic.  
- **Layouts:** Maintain shared elements across routes.  
- **Templates:** Reinitialize shared components when switching routes.  
- **Error Pages:** Isolate errors to specific segments.  
- **Loading States:** Enhance user experience during data fetching.  

---

---

# **Handling Errors in Layouts**

### General Information
- **Error Boundary Location**: An `_error.tsx_` file handles errors for all its child segments.  
- **Error Boundary Limitation**: If the error boundary resides inside a layout, it does not catch errors for the layout itself.  
- **Solution**: To handle layout errors, move the `_error.tsx_` file to the parent folder of the layout. This prevents crashing and displays error messages.  

### Example
1. Create an `_error.tsx_` file inside the `[productId]` folder.  
2. Simulate an error in the `[productId]/page.tsx` file:  
   - Use a `getRandomInt` function to generate a random number (0 or 1).  
   - If the number is `1`, throw an error to demonstrate error handling.  
3. Ensure the `page.tsx` file is client-side rendered to support this behavior.

---

# **Parallel Routes**

### Introduction
- **Definition**: Parallel routes are defined using "slots" in Next.js.  
- **Naming Convention**: Use the "@" prefix (e.g., `@folderName`) for slot folders.  
- **Behavior**: Slots act as props in the corresponding `_layout.tsx_` file.  
- **Children Prop**: The `children` prop is also considered a slot.

### Example
- In a complex dashboard route, define three slots: `@revenue`, `@notification`, and `@users`.  
- Pass them to the layout as props with their folder names.  
- Each slot manages its own loading and error states independently.

### Benefits
1. **Independent Route Handling**:  
   - Each slot has isolated loading and error states.  
   - Issues in one slot do not affect others.  
2. **Sub-navigation**:  
   - Slots can function as mini-applications with their own state and navigation.  
   - Ideal for complex dashboards.  

---

# **Unmatched Routes**

### Behavior
1. **Navigation from UI**:  
   - Slots retain their state even when navigating between different sections.  
   - For example, navigating from `@notification` to its child folder (`@notification/archived`) does not impact other slots.  

2. **Page Reload**:  
   - Upon reload, unmatched slots require a `_default.tsx_` file to display default content.  
   - Missing `_default.tsx_` results in a 404 error.

---

# **Conditional Routes**

### Overview
- Display different content based on conditions (e.g., user authentication).  
- **Restart Note**: Restart the server to ensure conditional routes function properly.

---

# **Intercepting Routes**

### Definition
- Stops default routing behavior to present alternative views while preserving route context.  
- **Usage**: Create a folder at the same level as the route with the same name but prefixed by `(.)` (e.g., `(.)f2`).  

### Path Matching
- **(.)**: Matches the current level.  
- **(..)**: Matches one level above.  
- **(...)**: Matches the root directory.

---

# **Parallel Intercepting Routes**

### Implementation
- Combine both parallel and intercepting routes, such as in a `photo-feed` route.  
- Allows seamless integration of multiple features.

---

# **Route Handlers**

### Key Points
- Used for creating custom RESTful endpoints.  
- Handlers execute server-side, keeping sensitive data secure.  
- **Conflict Resolution**: If `_route.ts_` and `_page.tsx_` exist in the same folder, move `_route.ts_` to an `api` subfolder.

---

# **Rendering Techniques**

### Comparison
1. **CSR (Client-Side Rendering)**:
   - Renders content in the browser.  
   - Increases initial load time and reduces SEO benefits.  

2. **SSR (Server-Side Rendering)**:
   - Renders HTML on the server.  
   - Improves SEO and reduces initial load time.  

3. **Hydration**:  
   - Combines server-rendered HTML with client-side JavaScript.  

### Advanced Solutions
- Use **Suspense SSR** for:
  1. HTML streaming on the server.  
  2. Selective hydration on the client.  

- Implement **Code Splitting**:
  - Load components on demand to optimize performance.  

---
This is a detailed explanation of **React Server Components (RSC)** and their integration with **Next.js App Router**, including the distinctions between server and client components, rendering strategies, and data-fetching techniques.
---

### **React Server Component Overview**
RSC enables **dual-environment execution**, allowing applications to combine the strengths of both server and client rendering:
- **Server Components**: Handle data fetching, static rendering, and server-specific tasks (e.g., database access).
- **Client Components**: Render interactive UI elements and manage browser APIs/events.

#### Key Benefits:
- Reduced bundle size.
- Enhanced security with server-side rendering.
- Improved SEO and performance (e.g., initial page load, FCP).
- Efficient streaming and caching for smoother user experiences.

---

### **Server and Client Components in Next.js**

#### **Server Components**:
- **Default behavior**: All components in Next.js are server components unless specified otherwise.
- **Execution**: Logs appear in the server terminal.
- **Limitations**: Cannot use React hooks (e.g., `useState`, `useEffect`) or browser-specific events (e.g., `onClick`).

#### **Client Components**:
- Require `"use client"` directive.
- Can access browser APIs and handle interactivity.
- Pre-rendered on the server for SEO benefits but hydrate on the client.

**Best Practice**: Place client components as leaf nodes to minimize performance overhead.

---

### **Rendering Strategies**

1. **Static Rendering**:
   - HTML is generated during the build process.
   - Ideal for pages with static content (e.g., blogs, marketing pages).
   - Prefetching is supported for faster navigation.
   - Cached and CDN-served for performance.

2. **Dynamic Rendering**:
   - HTML is generated at request time for each user.
   - Suitable for personalized content (e.g., user-specific dashboards).
   - Automatically activated in Next.js when dynamic functions like `cookies()`, `headers()`, or `searchParams` are used.

3. **Streaming**:
   - Progressive UI rendering in chunks.
   - Enhances user experience by displaying partial content immediately.
   - Useful for slow data-fetching scenarios.

---

### **Data Fetching in App Router**

#### **Server-Side Fetching**:
- Recommended for efficiency and caching.
- Data resides on the server, reducing client-side computation.
- Features like **Request Memoization** optimize repeated requests within a single render tree.

#### **Client-Side Fetching**:
- Requires third-party libraries like **TanStack Query** for caching and revalidation.
- Can invoke server-side route handlers for optimized API calls.

---

### **Caching and Optimization Techniques**

1. **Opting Out of Caching**:
   - Use `{ cache: "no-store" }` in fetch requests to bypass caching.
   - Dynamic functions disable caching for all subsequent requests in a file.

2. **Request Memoization**:
   - Prevents redundant requests for the same data within the React tree.
   - Improves performance and avoids unnecessary prop drilling.

---

### **Third-Party Packages**
- Certain packages (e.g., `react-slick`) may have compatibility issues with server components. Resolve this by isolating them in client components.

---

### **Interleaving Server and Client Components**
- Server components can only render when wrapped by client components.
- This approach ensures optimal use of server resources alongside client interactivity.

---

### **Specialized Tools**
- **Server-Only Package**: Ensures components execute exclusively on the server.
- **Client-Only Package**: Prevents server-side usage of client-specific code.

---

If you'd like to explore further or need examples, feel free to ask!
