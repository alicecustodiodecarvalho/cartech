import { Stack } from 'expo-router/stack';

export default function RootLayout() {
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
      initialRouteName="login"
    >
      <Stack.Screen name="index" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="login" options={{headerShown: false}}/>
      <Stack.Screen name="registro" options={{headerShown: false}}/>
      <Stack.Screen name="enviarProposta" options={{headerShown: false}}/>
      <Stack.Screen name="atualizarAnuncio" options={{headerShown: false}}/>
      <Stack.Screen name="atualizarDadosUser" options={{headerShown: false}}/>
      <Stack.Screen name="compraCarro" options={{headerShown: false}}/>
      <Stack.Screen name="detalhesAnuncio" options={{headerShown: false}}/>
      <Stack.Screen name="minhasCompras" options={{headerShown: false}}/>
      <Stack.Screen name="regras" options={{headerShown: false}}/>
      <Stack.Screen name="sidebar" options={{headerShown: false}}/>
      <Stack.Screen name="sobreNos" options={{headerShown: false}}/>
      <Stack.Screen name="admPages" options={{headerShown: false}}/>
    </Stack>
  );
}