import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ActivityEvent {
    id: string;
    timestamp: string;
    type: string;
    amount?: number;
    currency?: string;
}

interface ActivityListProps {
    events: ActivityEvent[];
}

export const ActivityList = ({ events }: ActivityListProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Recent Activity</Text>
            {events.map((event, index) => (
                <View key={event.id} style={styles.eventItem}>
                    <View style={styles.timelineContainer}>
                        <View style={[styles.dot, { backgroundColor: event.type === 'purchase' ? '#8950FC' : '#3699FF' }]} />
                        {index !== events.length - 1 && <View style={styles.line} />}
                    </View>
                    <View style={styles.content}>
                        <View style={styles.header}>
                            <Text style={styles.type}>{event.type.toUpperCase()}</Text>
                            <Text style={styles.time}>{new Date(event.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>
                        </View>
                        {event.amount && (
                            <Text style={styles.details}>
                                Amount: {event.amount} {event.currency}
                            </Text>
                        )}
                        <Text style={styles.date}>{new Date(event.timestamp).toDateString()}</Text>
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
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#3F4254',
        marginBottom: 20,
    },
    eventItem: {
        flexDirection: 'row',
    },
    timelineContainer: {
        alignItems: 'center',
        marginRight: 15,
    },
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        zIndex: 1,
    },
    line: {
        width: 2,
        flex: 1,
        backgroundColor: '#EBEDF3',
        marginVertical: 4,
    },
    content: {
        flex: 1,
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    type: {
        fontSize: 14,
        fontWeight: '600',
        color: '#3F4254',
    },
    time: {
        fontSize: 12,
        color: '#B5B5C3',
    },
    details: {
        fontSize: 13,
        color: '#7E8299',
        marginTop: 4,
    },
    date: {
        fontSize: 11,
        color: '#B5B5C3',
        marginTop: 4,
    },
});
