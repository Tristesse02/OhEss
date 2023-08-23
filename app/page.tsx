"use client";
import React from "react";

import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home(): React.JSX.Element {
  return (
    <>
      <Title>Hello World!</Title>
      <div>Why u keep watching stories?</div>
      <p>Go back and study :&lt;</p>
    </>
  );
}
