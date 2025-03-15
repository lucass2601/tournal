import { Stack } from "expo-router";
import AppBar from "@/components/molcecules/AppBar";

export default function WizardLayout() {
  return (
    <Stack
      screenOptions={{
        header: ({ options }) => <AppBar title={options.title} />,
      }}
    >
      <Stack.Screen name="type" options={{ title: "Create Tournament" }} />
      {/* <Stack.Screen name="info" options={{ title: "Turnier-Infos" }} />
      <Stack.Screen name="participants" options={{ title: "Teilnehmer" }} />
      <Stack.Screen name="summary" options={{ title: "Zusammenfassung" }} /> */}
    </Stack>
  );
}
