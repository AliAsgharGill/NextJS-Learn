import React from "react";

const Docs = ({ params }: { params: { slug: string[] } }) => {
  if (params.slug?.length === 1) {
    return <h1>Viewing docs of Feature {params.slug[0]}</h1>;
  } else if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for Feature {params.slug[0]} and concept {params.slug[1]}{" "}
      </h1>
    );
  } else if (params.slug?.length === 3) {
    return (
      <h1>
        Viewing docs for Feature {params.slug[0]} and concept {params.slug[1]}{" "}
        and example {params.slug[2]}{" "}
      </h1>
    );
  }
  return (
    <>
      <h1>Docs Home Page</h1>
    </>
  );
};

export default Docs;
