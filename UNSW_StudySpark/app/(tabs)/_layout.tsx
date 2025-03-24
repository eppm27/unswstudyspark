import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, ViewStyle } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';

const getTabBarStyle = (colorScheme: 'light' | 'dark' | null | undefined) => {
  return {
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
      ios: {
        position: 'absolute' as 'absolute', // iOS blur effect
      },
      default: {},
    }) as ViewStyle,
  };
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs screenOptions={getTabBarStyle(colorScheme)}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
          tabBarAccessibilityLabel: 'Home tab',
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: 'Matches',
          tabBarIcon: ({ color }) => <Feather name="heart" size={24} color={color} />,
          tabBarAccessibilityLabel: 'Likes tab',
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color }) => <Feather name="message-circle" size={24} color={color} />,
          tabBarAccessibilityLabel: 'Chat tab',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
          tabBarAccessibilityLabel: 'Profile tab',
        }}
      />
    </Tabs>
  );
}
