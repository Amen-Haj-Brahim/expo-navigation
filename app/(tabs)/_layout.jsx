import { Tabs, useLocalSearchParams } from 'expo-router'

export default function TabLayout() {
    const { username } = useLocalSearchParams()

    return (
        <Tabs>
            <Tabs.Screen name="home" initialParams={{ username }} />
            <Tabs.Screen name="index" initialParams={{ username }} />
        </Tabs>
    )
}
