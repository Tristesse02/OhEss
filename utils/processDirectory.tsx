import { Processes } from "@/types/utils/processDirectory";
import dynamic from "next/dynamic";

const processDirectory: Processes = {
  HelloWorld: {
    Component: dynamic(() => import("components/apps/HelloWorld"))
  },
  FriendlyReminder: {
    Component: dynamic(() => import("components/apps/FriendlyReminder"))
  },
  Question: {
    Component: dynamic(() => import("components/apps/Question"))
  }
};

export default processDirectory;
