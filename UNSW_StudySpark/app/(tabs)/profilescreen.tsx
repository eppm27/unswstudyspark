import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Your Profile</ThemedText>
      <ThemedText>Name: John Doe</ThemedText>
      <ThemedText>Major: Computer Science</ThemedText>
      {/* Add more profile details or editing options */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
