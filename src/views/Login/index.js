import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";


import styles from "./styles";

export default function City() {

    const navigation = useNavigation();

    function navigateToCidade(){
        navigation.navigate('Cidade');
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.textHeader}>LOGIN</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Email</Text>

                <Text style={styles.title}>Senha</Text>


                <Button style={styles.button} title="Proximo" onPress={navigateToCidade}/>
            </View>
        </View>
    );
}