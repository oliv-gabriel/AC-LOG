import React from "react";
import { Tabs } from "expo-router";
import NavBar from "../components/navBar/NavBar";

export default function _layout() {
  return (
    <Tabs tabBar={(props) => <NavBar {...props} />}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="analytics" options={{ title: "Analytics" }} />
      <Tabs.Screen name="wallet" options={{ title: "Wallet" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}