import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Button,
  View,
  ScrollView,
  Switch,
  Text,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


const users = [
  {
    id: 1,
    name: "Alice",
    bio: "Loves coffee and coding",
    photo: require("@/assets/profiles/user1.png"),
    year: "2nd Year",
    wam: "HD",
    studyGoal: "Master React Native",
    studyDuration: "3 hours/day",
    onCampus: true,
    languages: ["English", "Mandarin"],
    mbti: "INTJ",
  },
  {
    id: 2,
    name: "Bob",
    bio: "Enjoys hiking and photography",
    photo: require("@/assets/profiles/user2.png"),
    year: "3rd Year",
    wam: "D",
    studyGoal: "Improve algorithms",
    studyDuration: "2 hours/day",
    onCampus: false,
    languages: ["English", "Spanish"],
    mbti: "ENFP",
  },
  {
    id: 3,
    name: "Charlie",
    bio: "Tech enthusiast and gamer",
    photo: require("@/assets/profiles/user3.png"),
    year: "1st Year",
    wam: "C",
    studyGoal: "Build a gaming app",
    studyDuration: "4 hours/day",
    onCampus: true,
    languages: ["English"],
    mbti: "ISTP",
  },
  {
    id: 4,
    name: "Diana",
    bio: "Avid reader and aspiring writer",
    photo: require("@/assets/profiles/user4.png"),
    year: "4th Year",
    wam: "HD",
    studyGoal: "Publish a novel",
    studyDuration: "5 hours/day",
    onCampus: false,
    languages: ["English", "French"],
    mbti: "INFJ",
  },
  {
    id: 5,
    name: "Ethan",
    bio: "Fitness enthusiast and foodie",
    photo: require("@/assets/profiles/user5.png"),
    year: "3rd Year",
    wam: "D",
    studyGoal: "Learn nutrition science",
    studyDuration: "2 hours/day",
    onCampus: true,
    languages: ["English"],
    mbti: "ESTP",
  },
  {
    id: 6,
    name: "Fiona",
    bio: "Loves painting and exploring museums",
    photo: require("@/assets/profiles/user6.png"),
    year: "2nd Year",
    wam: "CR",
    studyGoal: "Master art history",
    studyDuration: "3 hours/day",
    onCampus: false,
    languages: ["English", "Italian"],
    mbti: "ISFP",
  },
  {
    id: 7,
    name: "George",
    bio: "Passionate about AI and machine learning",
    photo: require("@/assets/profiles/user7.png"),
    year: "4th Year",
    wam: "HD",
    studyGoal: "Build an AI startup",
    studyDuration: "6 hours/day",
    onCampus: true,
    languages: ["English", "German"],
    mbti: "ENTP",
  },
  {
    id: 8,
    name: "Hannah",
    bio: "Enjoys yoga and meditation",
    photo: require("@/assets/profiles/user8.png"),
    year: "1st Year",
    wam: "P",
    studyGoal: "Improve mental health",
    studyDuration: "1 hour/day",
    onCampus: false,
    languages: ["English"],
    mbti: "INFP",
  },
  {
    id: 9,
    name: "Ian",
    bio: "Guitarist and music producer",
    photo: require("@/assets/profiles/user9.png"),
    year: "3rd Year",
    wam: "C",
    studyGoal: "Compose a music album",
    studyDuration: "4 hours/day",
    onCampus: true,
    languages: ["English", "Portuguese"],
    mbti: "ESFP",
  },
  {
    id: 10,
    name: "Julia",
    bio: "Traveler and adventure seeker",
    photo: require("@/assets/profiles/user10.png"),
    year: "2nd Year",
    wam: "D",
    studyGoal: "Explore cultural studies",
    studyDuration: "3 hours/day",
    onCampus: false,
    languages: ["English", "Japanese"],
    mbti: "ENFJ",
  },
];

export default function HomeScreen() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [selectedYear, setSelectedYear] = useState("All");
  const [onCampusOnly, setOnCampusOnly] = useState(false);

  const handleLike = () => {
    console.log(`Liked ${users[currentUserIndex].name}`);
    setCurrentUserIndex(currentUserIndex + 1);
  };

  const handlePass = () => {
    console.log(`Passed on ${users[currentUserIndex].name}`);
    setCurrentUserIndex(currentUserIndex + 1);
  };

  const filteredUsers = users.filter((user) => {
    const matchesYear =
      selectedYear === "All" || user.year === selectedYear;
    const matchesOnCampus = !onCampusOnly || user.onCampus;
    return matchesYear && matchesOnCampus;
  });

  if (currentUserIndex >= filteredUsers.length) {
    return (
      <ThemedView style={styles.noMoreMatchesContainer}>
        <ThemedText type="subtitle">No more matches available</ThemedText>
      </ThemedView>
    );
  }

  const user = users[currentUserIndex];

  return (
    <ScrollView style={styles.container}>
      {/* Filter Options */}
      <View style={styles.filterContainer}>
  <View style={styles.filterGroup}>
    <View style={styles.filterItem}>
      <Text style={styles.filterLabel}>Year Level</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedYear}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="1st Year" value="1st Year" />
          <Picker.Item label="2nd Year" value="2nd Year" />
          <Picker.Item label="3rd Year" value="3rd Year" />
          <Picker.Item label="4th Year" value="4th Year" />
        </Picker>
      </View>
    </View>
    <View style={styles.filterItem}>
      <Text style={styles.filterLabel}>On Campus</Text>
      <Switch
        value={onCampusOnly}
        onValueChange={(value) => setOnCampusOnly(value)}
        trackColor={{ false: "#ccc", true: "#4CAF50" }}
        thumbColor={onCampusOnly ? "#4CAF50" : "#f4f3f4"}
      />
    </View>
  </View>
</View>

      {/* Match Card */}
      <ScrollView>
        <View style={styles.matchCard}>
          <Image source={user.photo} style={styles.userImage} />
          <ThemedText type="title" style={styles.userName}>
            {user.name}
          </ThemedText>
          <ThemedText style={styles.userBio}>{user.bio}</ThemedText>
          <View style={styles.userDetails}>
            <ThemedText>Year: {user.year || "Not specified"}</ThemedText>
            <ThemedText>WAM: {user.wam || "Not specified"}</ThemedText>
            <ThemedText>Study Goal: {user.studyGoal || "Not specified"}</ThemedText>
            <ThemedText>
              Study Duration: {user.studyDuration || "Not specified"}
            </ThemedText>
            <ThemedText>
              On Campus: {user.onCampus ? "Yes" : "No"}
            </ThemedText>
            <ThemedText>
              Languages: {user.languages?.join(", ") || "Not specified"}
            </ThemedText>
            <ThemedText>MBTI: {user.mbti || "Not specified"}</ThemedText>
          </View>
          <View style={styles.buttonsContainer}>
            <Button title="Like" onPress={handleLike} color="#4CAF50" />
            <Button title="Pass" onPress={handlePass} color="#F44336" />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    marginBottom: 80,
  },
  filterContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  filterGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filterItem: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#555",
  },
  pickerWrapper: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    overflow: "hidden",
  },
  picker: {
    width: "100%",
    height: 40,
  },
  matchCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  userImage: {
    width: "100%",
    height: 250,
    borderRadius: 16,
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  userBio: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 16,
    textAlign: "center",
  },
  userDetails: {
    marginBottom: 16,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  noMoreMatchesContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
});