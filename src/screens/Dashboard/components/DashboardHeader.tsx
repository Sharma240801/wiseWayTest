import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface DashboardHeaderProps {
    name: string;
    role: string;
}

export const DashboardHeader = ({ name, role }: DashboardHeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
            <View>
                <Text style={styles.greeting}>Hello, {name} 👋</Text>
                <Text style={styles.role}>{role}</Text>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Analytics Dashboard</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E1E2D',
        paddingHorizontal: 20,
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    greeting: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    role: {
        fontSize: 14,
        color: '#A2A2B5',
        marginTop: 4,
    },
    titleContainer: {
        marginTop: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#8080FF',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
