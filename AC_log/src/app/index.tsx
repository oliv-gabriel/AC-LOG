import { useState } from "react";  
import {View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import {router} from "expo-router";

import { Button } from "@/components/button";
import { Input } from "@/components/input";

export default function Index() {
    const [name, setName] = useState<string>("")


    function handleNext() {
        router.navigate("/dashboard");
    }

  return (
   

    <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        
        <Text style={styles.title}>
            AC LOG, {name}
        </Text>

        <Input onChangeText={(setName)} />

        <Button title="Entrar" onPress={handleNext}/>  

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        alignItems: 'center',
        gap: 16,
    },

    title: {
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',

    },

})