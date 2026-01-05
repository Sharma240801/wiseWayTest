import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 60) / 2;

interface KPICardProps {
    label: string;
    value: string | number;
    trend?: string;
    trendValue?: string;
    color?: string;
}

export const KPICard = ({ label, value, trend, trendValue, color = '#3699FF' }: KPICardProps) => {
    return (
        <View style={styles.card}>
            <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
                <View style={[styles.dot, { backgroundColor: color }]} />
            </View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
            {trend && (
                <View style={styles.trendContainer}>
                    <Text style={[styles.trend, { color: trend === 'up' ? '#1BC5BD' : '#F64E60' }]}>
                        {trend === 'up' ? '↑' : '↓'} {trendValue}
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        width: CARD_WIDTH,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    label: {
        fontSize: 12,
        color: '#B5B5C3',
        fontWeight: '600',
        marginBottom: 4,
    },
    value: {
        fontSize: 18,
        fontWeight: '700',
        color: '#3F4254',
    },
    trendContainer: {
        marginTop: 8,
    },
    trend: {
        fontSize: 12,
        fontWeight: '600',
    },
});
