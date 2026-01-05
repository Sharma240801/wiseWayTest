import React, { useEffect, useState, useMemo } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator, Text, RefreshControl } from 'react-native';
import { ScreenWrapper } from '@/components';
import { mockDashboardApiResponse } from '@/constants/mockData';
import { DashboardHeader } from './components/DashboardHeader';
import { KPICard } from './components/KPICard';
import { ActivityList } from './components/ActivityList';
import { PlatformStats } from './components/PlatformStats';
import { RegionStats } from './components/RegionStats';

const DashboardScreen = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any>(null);
    const [refreshing, setRefreshing] = useState(false);

    const fetchData = async () => {
        // Simulate API call
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setData(mockDashboardApiResponse.data);
        setLoading(false);
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setData(mockDashboardApiResponse.data);
        setRefreshing(false);
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    const stats = useMemo(() => {
        if (!data) return null;

        const { summary } = data.stats;

        // Derive growth percentage
        const current = summary.revenue.monthly.current.amount;
        const previous = summary.revenue.monthly.previous.amount;
        const growth = (((current - previous) / previous) * 100).toFixed(2);

        return {
            totalUsers: summary.users.total,
            activeUsers: summary.users.active,
            revenueTotal: `${summary.revenue.total.amount.toLocaleString()} ${summary.revenue.total.currency}`,
            revenueMonthly: `${summary.revenue.monthly.current.amount.toLocaleString()} ${summary.revenue.monthly.current.currency}`,
            growth,
            conversionRate: summary.conversion.rate,
            trend: summary.conversion.trend,
        };
    }, [data]);

    if (loading && !refreshing) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#3699FF" />
                <Text style={styles.loaderText}>Fetching analytics...</Text>
            </View>
        );
    }

    if (!data) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Failed to load dashboard data.</Text>
            </View>
        );
    }

    return (
        <ScreenWrapper style={styles.wrapper}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor="#3699FF" />
                }
            >
                <DashboardHeader
                    name={data.user?.profile?.name || 'User'}
                    role={data.user?.profile?.role || 'Guest'}
                />

                <View style={styles.content}>
                    <View style={styles.statsGrid}>
                        <KPICard
                            label="Total Users"
                            value={stats?.totalUsers?.toLocaleString() || 0}
                            color="#3699FF"
                        />
                        <KPICard
                            label="Active Users"
                            value={stats?.activeUsers?.toLocaleString() || 0}
                            color="#1BC5BD"
                        />
                        <KPICard
                            label="Monthly Revenue"
                            value={stats?.revenueMonthly || 0}
                            trend="up"
                            trendValue={`${stats?.growth}%`}
                            color="#8950FC"
                        />
                        <KPICard
                            label="Conversion Rate"
                            value={`${stats?.conversionRate}%`}
                            trend={stats?.trend}
                            trendValue="1.2%"
                            color="#FFA800"
                        />
                    </View>

                    <ActivityList events={data.stats.activity.events} />

                    <PlatformStats platforms={data.stats.platforms} />

                    <RegionStats regions={data.stats.regions.top.data} />
                </View>
            </ScrollView>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#F3F6F9',
    },
    content: {
        padding: 20,
    },
    statsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F6F9',
    },
    loaderText: {
        marginTop: 10,
        color: '#3F4254',
        fontSize: 16,
        fontWeight: '500',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    errorText: {
        color: '#F64E60',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default DashboardScreen;
