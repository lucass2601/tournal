import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { colors, typography } from "@/theme/theme";

import { DateTime } from "luxon";

import IconClock from "@/assets/icons/icon-clock.svg";
import IconUser from "@/assets/icons/icon-user.svg";

const tournamentTypeDefinitions = {
  knockout: "Knockout",
  roundrobin: "Round Robin",
};

const tournamentStatusDefinitions = {
  pending: "Pending",
  active: "Active",
  completed: "Completed",
};

const TournamentItem = ({
  title = "Turniername",
  dateTime,
  participants = 48,
  tournamentType = "Knockout",
  tournamentStatus,
  onPress,
  style,
  ...props
}) => {
  const userTimeZone = DateTime.local().zoneName;

  const dt = DateTime.fromISO(dateTime, { zone: "utc" }).setZone(userTimeZone);
  const formattedDate = dt.toFormat("LLL d"); // z. B. "Mar 16"
  const formattedTime = dt.toLocaleString(DateTime.TIME_SIMPLE);

  return (
    <Pressable onPress={onPress} style={[styles.container, style]} {...props}>
      <View style={styles.header}>
        <Image
          style={styles.cover}
          source={require("@/assets/images/icon.png")}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.dateTimeContainer}>
            <IconClock width={16} height={16} color={colors["grey-500"]} />
            <Text style={styles.date_time}>{formattedDate}</Text>
            <View style={styles.ellipse}></View>
            <Text style={styles.date_time}>{formattedTime}</Text>
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
            {tournamentTypeDefinitions[tournamentType]}
          </Text>
        </View>
        <Text style={[styles.status, styles[`status__${tournamentStatus}`]]}>
          {tournamentStatusDefinitions[tournamentStatus]}
        </Text>
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
  status__active: {
    color: colors["primary-600"],
  },
  status__completed: {
    color: colors["error-600"],
  },
  ellipse: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors["grey-500"],
    marginVertical: "auto",
  },
});
