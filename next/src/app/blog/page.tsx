import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Blog Page",
    template: "%s | Blog Page",
  },
};
function Blog() {
  return (
    <div>
      <h1>This is blog page</h1>
    </div>
  );
}

export default Blog;
