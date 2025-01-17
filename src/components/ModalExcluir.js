import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const ExcluirModal = ({ visible, onClose }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleDeleteAccount = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem('token'); 
            const userId = await AsyncStorage.getItem('id'); 

            const response = await fetch(`https://pi3-backend-i9l3.onrender.com/usuarios/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                await AsyncStorage.clear();
                Alert.alert('Sucesso', 'Sua conta foi excluída com sucesso.');
                onClose();
                router.replace('/login');
            } else {
                const errorText = await response.text();
                Alert.alert('Erro', `Falha ao excluir conta: ${errorText}`);
                console.log(errorText)
            }
        } catch (error) {
            console.error('Erro ao excluir conta:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar excluir a conta.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <View style={styles.close}>
                        <AntDesign name="close" size={24} color="black" onPress={onClose} />
                    </View>
                    <View style={styles.textview}>
                        <Text style={styles.text2}>Deseja realmente excluir a conta?</Text>
                    </View>
                    <View style={styles.textpor}>
                        <Text style={styles.text3}>Depois que você apaga uma conta, não há como voltar atrás. Por favor, tenha certeza.</Text>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.botao2} onPress={handleDeleteAccount} disabled={loading}>
                            <Text style={styles.text}>{loading ? 'Excluindo...' : 'Excluir'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao} onPress={onClose}>
                            <Text style={styles.text}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '95%',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    close: {
        width: '100%'
    },
    botao: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'red',
        alignItems: 'center',
        elevation: 3,
    },
    botao2: {
        width: '40%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        elevation: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    row: {
        flexDirection: 'row',
        gap: 15,
        marginBottom: 10,
    },
    textview: {},
    text2: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    text3: {
        fontSize: 17
    },
    textpor: {
        padding: 25,
        paddingBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ExcluirModal;
