"use client";
import React from "react";
import Question from "components/apps/Question";
import processDirectory from "utils/processDirectory";
import FriendlyReminder from "components/apps/FriendlyReminder";

export default function Home(): React.JSX.Element {
  return (
    <>
      <processDirectory.HelloWorld.Component />
      <processDirectory.Question.Component />
      <processDirectory.FriendlyReminder.Component />
    </>
  );
}
