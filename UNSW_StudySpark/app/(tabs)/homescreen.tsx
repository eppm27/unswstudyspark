import React, { useState } from "react";
import { StyleSheet, Image, Button, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ParallaxScrollView from "@/components/ParallaxScrollView";

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
  // ...other users
  {
    id: 3,
    name: "Charlie",
    bio: "Tech enthusiast and gamer",
    photo: require("@/assets/profiles/user3.png"),
  },
  {
    id: 4,
    name: "Diana",
    bio: "Avid reader and aspiring writer",
    photo: require("@/assets/profiles/user4.png"),
  },
  {
    id: 5,
    name: "Ethan",
    bio: "Fitness enthusiast and foodie",
    photo: require("@/assets/profiles/user5.png"),
  },
  {
    id: 6,
    name: "Fiona",
    bio: "Loves painting and exploring museums",
    photo: require("@/assets/profiles/user6.png"),
  },
  {
    id: 7,
    name: "George",
    bio: "Passionate about AI and machine learning",
    photo: require("@/assets/profiles/user7.png"),
  },
  {
    id: 8,
    name: "Hannah",
    bio: "Enjoys yoga and meditation",
    photo: require("@/assets/profiles/user8.png"),
  },
  {
    id: 9,
    name: "Ian",
    bio: "Guitarist and music producer",
    photo: require("@/assets/profiles/user9.png"),
  },
  {
    id: 10,
    name: "Julia",
    bio: "Traveler and adventure seeker",
    photo: require("@/assets/profiles/user10.png"),
  },
];

export default function HomeScreen() {
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const handleLike = () => {
    // Handle liking the user (could save it to a backend, update UI, etc.)
    console.log(`Liked ${users[currentUserIndex].name}`);
    setCurrentUserIndex(currentUserIndex + 1); // Move to the next user
  };

  const handlePass = () => {
    // Handle passing on the user
    console.log(`Passed on ${users[currentUserIndex].name}`);
    setCurrentUserIndex(currentUserIndex + 1); // Move to the next user
  };

  if (currentUserIndex >= users.length) {
    return (
      <ThemedView style={styles.noMoreMatchesContainer}>
        <ThemedText type="subtitle">No more matches available</ThemedText>
      </ThemedView>
    );
  }

  const user = users[currentUserIndex];

  return (
    <ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Find Your Match!</ThemedText>
      </ThemedView>

      <View style={styles.matchCard}>
        <Image source={user.photo} style={styles.userImage} />
        <ThemedText type="title">{user.name}</ThemedText>
        <ThemedText>{user.bio}</ThemedText>
        <ThemedText>Year: {user.year}</ThemedText>
        <ThemedText>WAM: {user.wam}</ThemedText>
        <ThemedText>Study Goal: {user.studyGoal}</ThemedText>
        <ThemedText>Study Duration: {user.studyDuration}</ThemedText>
        <ThemedText>On Campus: {user.onCampus ? "Yes" : "No"}</ThemedText>
        <ThemedText>
          Languages: {user.languages?.join(", ") || "Not specified"}
        </ThemedText>
        <ThemedText>MBTI: {user.mbti}</ThemedText>
        <View style={styles.buttonsContainer}>
          <Button title="Like" onPress={handleLike} color="green" />
          <Button title="Pass" onPress={handlePass} color="red" />
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
    resizeMode: "contain",
  },
  matchCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  userImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  noMoreMatchesContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
