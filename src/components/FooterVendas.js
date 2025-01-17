import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { Linking } from 'react-native';

export default function FooterVendas({ teste, veiculo, comprar }) {
  const router = useRouter();

  const openWhatsApp = (phoneNumber) => {
    const url = `whatsapp://send?phone=${phoneNumber}`;

    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log('WhatsApp não está instalado ou o link é inválido');
        } else {
          return Linking.openURL(url);
        }
      })
      .catch(err => console.error('Erro ao abrir o WhatsApp:', err));
  };

  return (
    <View>
      {comprar === true ? (
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.comprarButton}
            onPress={() => router.push({ pathname: '/compraCarro', params: { ...veiculo }})}
          >
            <Text style={styles.buttonText}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cllButton} onPress={() => openWhatsApp('551299670-2245')}>
            <Ionicons name="logo-whatsapp" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.messageButton} onPress={() => router.push('/enviarProposta')}>
            <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </TouchableOpacity>
        </View>
      ) : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: '#ddd',
  },
  comprarButton: {
    flex: 4,
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  cllButton: {
    flex: 1,
    backgroundColor: '#000000',
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 2,
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  messageButton: {
    flex: 4,
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Sombra para Android
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
