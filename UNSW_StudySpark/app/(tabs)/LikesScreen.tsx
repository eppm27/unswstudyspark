import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LikesScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Your Matches</ThemedText>
      {/* Display the user's study buddy matches and session details */}
      <ThemedText>Study Buddy: Jane Smith</ThemedText>
      <ThemedText>Session Date: March 30, 2025</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
