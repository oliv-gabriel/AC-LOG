import {View, Text, StyleSheet, Button} from "react-native";
import {router} from "expo-router";


export default function Dashboard() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dashboard</Text>
            <Button title="Voltar" onPress={() => router.back()} />
        </View>
    );
}

export const styles = StyleSheet.create({
    container: { flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    title: { fontSize: 24,
        fontWeight: 'bold'
    },
})