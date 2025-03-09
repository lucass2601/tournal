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
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="customize"
        options={{
          title: "Customize",
          tabBarIcon: ({ color }) => <Filter color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
