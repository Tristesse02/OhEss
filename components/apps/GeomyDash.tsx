import React from "react";
import { useProcesses } from "contexts/process";

/**
 * The function that renders the GeomyDash app.
 * @returns JSX.Element
 */
const GeomyDash = ({ id }: { id: string }): JSX.Element => {
  const {
    processes: {
      [id]: { url }
    }
  } = useProcesses();
  console.log(url);
  return <div>GeomyDash {url}</div>;
};

export default GeomyDash;
