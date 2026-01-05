import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RegionData {
    country: string;
    users: number;
    revenue?: {
        amount: number;
        currency: string;
    };
}

interface RegionStatsProps {
    regions: RegionData[];
}

export const RegionStats = ({ regions }: RegionStatsProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Top Regions</Text>
            {regions.map((region) => (
                <View key={region.country} style={styles.regionItem}>
                    <View style={styles.info}>
                        <Text style={styles.country}>{region.country}</Text>
                        <Text style={styles.users}>{region.users.toLocaleString()} users</Text>
                    </View>
                    <View style={styles.revenueContainer}>
                        {region.revenue ? (
                            <Text style={styles.revenue}>
                                {region.revenue.amount.toLocaleString(undefined, { style: 'currency', currency: region.revenue.currency })}
                            </Text>
                        ) : (
                            <Text style={styles.missing}>N/A</Text>
                        )}
                    </View>
                </View>
            ))}
        </View>
    );
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
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#3F4254',
        marginBottom: 20,
    },
    regionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#F3F6F9',
    },
    info: {
        flex: 1,
    },
    country: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3F4254',
    },
    users: {
        fontSize: 12,
        color: '#B5B5C3',
        marginTop: 2,
    },
    revenueContainer: {
        alignItems: 'flex-end',
    },
    revenue: {
        fontSize: 14,
        fontWeight: '700',
        color: '#1BC5BD',
    },
    missing: {
        fontSize: 12,
        color: '#B5B5C3',
        fontStyle: 'italic',
    },
});
