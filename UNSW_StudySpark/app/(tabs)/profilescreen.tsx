import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Your Profile</ThemedText>
      {/* Display user profile details here */}
      <ThemedText>Name: John Doe</ThemedText>
      <ThemedText>Major: Computer Science</ThemedText>
      {/* Add other profile details and editing options */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
