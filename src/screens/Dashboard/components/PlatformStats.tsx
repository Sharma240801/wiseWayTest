import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PlatformBreakdown {
    name: string;
    breakdown: Record<string, {
        users: number;
        activePercentage: number;
    }>;
}

interface PlatformStatsProps {
    platforms: PlatformBreakdown[];
}

export const PlatformStats = ({ platforms }: PlatformStatsProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Platform-wise Usage</Text>
            {platforms.map((platform) => (
                <View key={platform.name} style={styles.platformSection}>
                    <Text style={styles.platformName}>{platform.name}</Text>
                    {Object.entries(platform.breakdown).map(([key, data]) => (
                        <View key={key} style={styles.item}>
                            <View style={styles.header}>
                                <Text style={styles.subPlatform}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
                                <Text style={styles.count}>{data.users.toLocaleString()} users</Text>
                            </View>
                            <View style={styles.progressBg}>
                                <View
                                    style={[
                                        styles.progressFill,
                                        { width: `${data.activePercentage}%`, backgroundColor: getProgressColor(data.activePercentage) }
                                    ]}
                                />
                            </View>
                            <Text style={styles.percentage}>{data.activePercentage}% Active</Text>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};

const getProgressColor = (percent: number) => {
    if (percent > 70) return '#1BC5BD';
    if (percent > 50) return '#3699FF';
    return '#FFA800';
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 20,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#3F4254',
        marginBottom: 20,
    },
    platformSection: {
        marginBottom: 20,
    },
    platformName: {
        fontSize: 15,
        fontWeight: '700',
        color: '#181C32',
        marginBottom: 10,
        backgroundColor: '#F3F6F9',
        padding: 8,
        borderRadius: 4,
    },
    item: {
        marginBottom: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    subPlatform: {
        fontSize: 13,
        color: '#3F4254',
        fontWeight: '600',
    },
    count: {
        fontSize: 12,
        color: '#B5B5C3',
    },
    progressBg: {
        height: 8,
        backgroundColor: '#EBEDF3',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
    },
    percentage: {
        fontSize: 11,
        color: '#7E8299',
        marginTop: 4,
        textAlign: 'right',
    },
});
