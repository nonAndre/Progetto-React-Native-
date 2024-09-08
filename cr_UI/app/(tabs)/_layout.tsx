import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable ,Image} from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs

      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarActiveBackgroundColor:'#404a61',
        tabBarInactiveBackgroundColor:'#404a61',
        tabBarStyle:{
          height:75,
        },
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title: 'Battle',
          tabBarIcon: ({ color }) => <Image style={{width:47,height:47,resizeMode:'contain'}}source={require('@/cr-ui-master/named/clanwars-emblem.png')} />,
        }}
      />
    </Tabs>
  );
}
