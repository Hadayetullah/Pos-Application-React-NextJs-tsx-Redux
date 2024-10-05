"use client";

import { Provider } from "react-redux";
import store from "./store"; // Adjust the path if necessary
import React from "react"; // Ensure React is imported

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
