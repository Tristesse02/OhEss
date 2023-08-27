"use client";
import React from "react";
import HelloWorld from "@/components/apps/HelloWorld";
import Question from "@/components/apps/Question";
import FriendlyReminder from "@/components/apps/FriendlyReminder";

export default function Home(): React.JSX.Element {
  return (
    <>
      <HelloWorld />
      <Question />
      <FriendlyReminder />
    </>
  );
}
