import { Stack } from 'expo-router/stack';

export default function AdmLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: '#1E3A8A',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="administradores" options={{headerShown: false}}/>
      <Stack.Screen name="detalhesUser" options={{headerShown: false}}/>
      <Stack.Screen name="registroAdm" options={{headerShown: false}}/>
      <Stack.Screen name="usuarios" options={{headerShown: false}}/>
    </Stack>
  );
}