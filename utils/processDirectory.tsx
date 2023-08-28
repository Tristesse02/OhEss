import dynamic from "next/dynamic";

const processDirectory = {
  HelloWorld: {
    Component: dynamic(() => import("components/apps/HelloWorld"))
  },
  FriendlyReminder: {
    Component: dynamic(() => import("components/apps/FriendlyReminder"))
  },
  Question: {
    Component: dynamic(() => import("components/apps/Question"))
  },
};

export default processDirectory;
