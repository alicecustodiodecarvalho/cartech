import { Tabs } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, TouchableOpacity, Vibration } from 'react-native';


export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'white',
      headerShown: false,
      tabBarStyle: { backgroundColor: 'darkred' },
      tabBarShowLabel: false
    }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <Feather name="home" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="catalogoCarros"
        options={{
          title: 'Pesquisa',
          tabBarIcon: ({ color }) => <Feather name="search" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="cadastrarVeiculo"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <AntDesign name="plus" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="meusVeiculos"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Ionicons name="car-sport-outline" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sideBarUser"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <Feather name="menu" size={25} color={color} />,
        }}
      />
      {/* <Tabs.Screen
        name="searchCompany"
        options={{
          tabBarButton: () => null,
        }}
      /> */}
      
    </Tabs>
  );
}