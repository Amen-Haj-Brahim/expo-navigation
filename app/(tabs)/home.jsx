import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function hHome() {
    return (
        <View style={styles.container}>
            <Text>home tab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    link: {
        color: 'blue'
    }
});
