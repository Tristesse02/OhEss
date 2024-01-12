import React from "react";
import package_info from "package.json";
import type { FC } from "react";

const { title, description } = package_info;

const Metadata: FC = () => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
);

export default Metadata;
