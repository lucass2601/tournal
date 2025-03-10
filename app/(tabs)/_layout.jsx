import { Tabs } from "expo-router";

import { colors } from "@/theme/theme";

import Home from "@/assets/icons/icon-home.svg";
import Filter from "@/assets/icons/icon-filter.svg";
import Settings from "@/assets/icons/icon-settings.svg";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors["primary-600"],
        tabBarInactiveTintColor: colors["grey-500"],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Home
              color={color}
              fill={focused ? "transparent" : "transparent"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="customize"
        options={{
          title: "Customize",
          tabBarIcon: ({ color, focused }) => (
            <Filter
              color={color}
              fill={focused ? "transparent" : "transparent"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) => (
            <Settings
              color={color}
              fill={focused ? "transparent" : "transparent"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
