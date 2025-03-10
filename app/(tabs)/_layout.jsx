import { Tabs } from "expo-router";

import { typography, colors } from "@/theme/theme";

import IconHome from "@/assets/icons/icon-home.svg";
import IconFilter from "@/assets/icons/icon-filter.svg";
import IconSettings from "@/assets/icons/icon-settings.svg";

import IconHomeFilled from "@/assets/icons/icon-home-filled.svg";
import IconFilterFilled from "@/assets/icons/icon-filter-filled.svg";
import IconSettingsFilled from "@/assets/icons/icon-settings-filled.svg";

import { Text } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors["primary-600"],
        tabBarInactiveTintColor: colors["grey-500"],
        tabBarLabel: ({ focused }) => {
          const label =
            route.name === "index"
              ? "Home"
              : route.name.charAt(0).toUpperCase() + route.name.slice(1);

          return focused ? (
            <Text
              style={{
                ...typography.body.small.bold,
                color: colors["primary-600"],
              }}
            >
              {label}
            </Text>
          ) : (
            <Text
              style={{
                ...typography.body.small.regular,
                color: colors["grey-500"],
              }}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconHomeFilled color={color} width={24} height={24} />
            ) : (
              <IconHome color={color} width={24} height={24} />
            ),
          // <Home
          //   width={24}
          //   height={24}
          //   color={color}
          //   fill={focused ? "transparent" : "transparent"}
          // />
        }}
      />
      <Tabs.Screen
        name="customize"
        options={{
          title: "Customize",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconFilterFilled color={color} width={24} height={24} />
            ) : (
              <IconFilter color={color} width={24} height={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <IconSettingsFilled color={color} width={24} height={24} />
            ) : (
              <IconSettings color={color} width={24} height={24} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
