import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Link href="/">back to index</Link>
            <Text>{username}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});