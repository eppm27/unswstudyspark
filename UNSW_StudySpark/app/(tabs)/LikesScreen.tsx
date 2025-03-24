import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Image, Text, Modal, Button, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const matches = [
  {
    id: 1,
    name: "Jane",
    bio: "Loves coffee and coding",
    photo: require("@/assets/profiles/user1.png"),
    year: "2nd Year",
    wam: "HD",
    studyGoal: "Master React Native",
    studyDuration: "3 hours/day",
    onCampus: true,
    languages: ["English", "Mandarin"],
    mbti: "INTJ",
    likedDate: "March 30, 2025",
  },
  {
    id: 2,
    name: "John",
    bio: "Enjoys hiking and photography",
    photo: require("@/assets/profiles/user2.png"),
    year: "3rd Year",
    wam: "D",
    studyGoal: "Improve algorithms",
    studyDuration: "2 hours/day",
    onCampus: false,
    languages: ["English", "Spanish"],
    mbti: "ENFP",
    likedDate: "April 2, 2025",
  },
  {
    id: 3,
    name: "Emily",
    bio: "Tech enthusiast and gamer",
    photo: require("@/assets/profiles/user3.png"),
    year: "1st Year",
    wam: "C",
    studyGoal: "Build a gaming app",
    studyDuration: "4 hours/day",
    onCampus: true,
    languages: ["English"],
    mbti: "ISTP",
    likedDate: "April 5, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
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
    likedDate: "March 30, 2025",
  },
  {
    id: 11,
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
    likedDate: "March 30, 2025",
  },
  {
    id: 12,
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
    likedDate: "March 30, 2025",
  },
  {
    id: 13,
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
    likedDate: "March 30, 2025",
  },
];

export default function LikesScreen() {
  const [selectedMatch, setSelectedMatch] = useState<{
    id: number;
    name: string;
    bio: string;
    photo: any;
    year: string;
    wam: string;
    studyGoal: string;
    studyDuration: string;
    onCampus: boolean;
    languages: string[];
    mbti: string;
    likedDate: string;
  } | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleMatchPress = (match: {
    id: number;
    name: string;
    bio: string;
    photo: any;
    year: string;
    wam: string;
    studyGoal: string;
    studyDuration: string;
    onCampus: boolean;
    languages: string[];
    mbti: string;
    likedDate: string;
  }) => {
    setSelectedMatch(match);
    setModalVisible(true);
  };

  const handleMatchBack = () => {
    if (selectedMatch) {
      console.log(`Matched back with ${selectedMatch.name}`);
    }
    setModalVisible(false);
  };

  const handleDismiss = () => {
    if (selectedMatch) {
      console.log(`Dismissed ${selectedMatch.name}`);
    }
    setModalVisible(false);
  };

  const renderMatch = ({ item }: { item: typeof matches[number] }) => (
    <TouchableOpacity onPress={() => handleMatchPress(item)}>
      <View style={styles.matchCard}>
        <Image source={item.photo} style={styles.matchImage} />
        <View style={styles.matchDetails}>
          <ThemedText type="title" style={styles.matchName}>
            {item.name}
          </ThemedText>
          <ThemedText style={styles.matchDate}>
            Liked Date: {item.likedDate}
          </ThemedText>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={matches}
        renderItem={renderMatch}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      {selectedMatch && (
        <Modal
          visible={isModalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image source={selectedMatch.photo} style={styles.modalImage} />
              <ThemedText type="title" style={styles.modalName}>
                {selectedMatch.name}
              </ThemedText>
              <ThemedText style={styles.modalBio}>{selectedMatch.bio}</ThemedText>
              <ThemedText style={styles.modalDetails}>
                Year: {selectedMatch.year}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                WAM: {selectedMatch.wam}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                Study Goal: {selectedMatch.studyGoal}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                Study Duration: {selectedMatch.studyDuration}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                On Campus: {selectedMatch.onCampus ? "Yes" : "No"}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                Languages: {selectedMatch.languages.join(", ")}
              </ThemedText>
              <ThemedText style={styles.modalDetails}>
                MBTI: {selectedMatch.mbti}
              </ThemedText>
              <View style={styles.modalButtons}>
                <Button title="Match Back" onPress={handleMatchBack} color="#4CAF50" />
                <Button title="Dismiss" onPress={handleDismiss} color="#F44336" />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 16,
  },
  matchCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  matchImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  matchDetails: {
    flex: 1,
  },
  matchName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  matchDate: {
    fontSize: 14,
    color: "#555",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  modalBio: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 8,
    textAlign: "center",
  },
  modalDetails: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
});
