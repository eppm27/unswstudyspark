import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ChatScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Your Chat</ThemedText>
      {/* Display the user's study buddy chats */}
      <ThemedText>Chat Buddy: Jane Smith</ThemedText>
      <ThemedText>Last active: March 30, 2025</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
