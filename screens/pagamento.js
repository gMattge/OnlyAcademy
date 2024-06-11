import React from "react";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { openBrowserAsync } from "expo-web-browser";
import { ACCESS_TOKEN } from "../config";

export default function Pagamento() {    
const navigation = useNavigation();

    const handleIntegracaoMensal = async () => {
        let preferencia = {
            reason: "Plano Mensal",
            auto_recurring: {
                frequency: 1,
                frequency_type: "months",
                billing_day: 10,
                billing_day_proportional: true,
                transaction_amount: 29.90,
                currency_id: "BRL"
            },
            payment_methods_allowed: {
                payment_types: [
                    { id: "account_money" },
                    { id: "credit_card" }
                ],
                payment_methods: [{}]
            },
            back_url: "https://www.yoursite.com"
        }

        try {
            const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferencia)
            });

            const data = await response.json();
            if (data.init_point) {
                openBrowserAsync(data.init_point);
            }
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    const handleIntegracaoAnual = async () => {
        let preferencia = {
            reason: "Plano Anual",
            auto_recurring: {
                frequency: 12,
                frequency_type: "months",
                transaction_amount: 170,
                currency_id: "BRL"
            },
            payment_methods_allowed: {
                payment_types: [
                    { id: "account_money" },
                    { id: "credit_card" }
                ],
                payment_methods: [{}]
            },
            back_url: "https://www.yoursite.com"
        }

        try {
            const response = await fetch('https://api.mercadopago.com/preapproval_plan', {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(preferencia)
            });

            const data = await response.json();
            if (data.init_point) {
                openBrowserAsync(data.init_point);
            }
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.statusBarBackground} />
            <StatusBar barStyle='dark-content' backgroundColor='#000000' translucent />
            <View style={styles.header}>
                <Text style={styles.headerText}>Escolha um Plano!</Text>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Gratuito</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleIntegracaoMensal} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Mensal</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleIntegracaoAnual} style={styles.optionButton}>
                    <View style={styles.optionContent}>
                        <Text style={styles.optionText}>Plano Anual</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusBarBackground: {
        backgroundColor: '#CCC',
        height: Constants.statusBarHeight,
    },
    header: {
        alignItems: 'center',
    },
    headerText: {
        color: '#FF0000',
        marginTop: 13,
        fontWeight: 'bold',
        fontSize: 32,
    },
    optionsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 200,
        gap: 15,
    },
    optionButton: {
        backgroundColor: '#ccc',
        width: 350,
        height: 100,
        borderRadius: 20,
    },
    optionContent: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
    optionText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
