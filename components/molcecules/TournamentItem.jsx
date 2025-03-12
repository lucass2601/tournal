import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { colors, typography } from "@/theme/theme";

import IconClock from "@/assets/icons/icon-clock.svg";
import IconUser from "@/assets/icons/icon-user.svg";

const TournamentItem = ({
  title = "Turniername",
  date = "Datum",
  participants = 48,
  tournamentType = "Knockout",
  onPress,
  style,
  ...props
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, style]} {...props}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={require("@/assets/images/icon.png")}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Example Tournament</Text>
          <View style={styles.dateTimeContainer}>
            <IconClock width={16} height={16} color={colors["grey-500"]} />
            <Text style={styles.date_time}>Mar 16</Text>
            <View style={styles.ellipse}></View>
            <Text style={styles.date_time}>05:00 PM</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.statsContainer}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <IconUser width={14} height={14} color={colors["grey-500"]} />
            <Text style={[styles.participantCount, styles.statsContainerText]}>
              {participants}
            </Text>
          </View>
          <View style={styles.ellipse}></View>
          <Text style={[styles.tournamentType, styles.statsContainerText]}>
            {tournamentType}
          </Text>
        </View>
        <Text style={styles.status}>Pending</Text>
      </View>
    </Pressable>
  );
};

export default TournamentItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors["grey-50"],
    borderRadius: 12,
    padding: 16,
    gap: 16,
    width: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  footer: {
    borderTopWidth: 1,
    borderColor: colors["grey-200"],
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 12,
  },
  cover: {
    height: 48,
    width: 48,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    ...typography.body.medium.bold,
  },
  dateTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 6,
  },
  statsContainer: {
    flexDirection: "row",
    gap: 8,
  },
  date_time: {
    ...typography.body.small.regular,
    color: colors["grey-500"],
  },
  statsContainerText: {
    color: colors["grey-400"],
    ...typography.body.small.medium,
  },
  status: {
    ...typography.body.small.bold,
    color: colors["grey-400"],
  },
  ellipse: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors["grey-500"],
    marginVertical: "auto",
  },
});
