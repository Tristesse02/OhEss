import React from "react";
import package_info from "package.json";

const { title, description } = package_info;

const Metadata = (): JSX.Element => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
);

export default Metadata;
