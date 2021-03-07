import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import TimeTableView, { genTimeBlock } from 'react-native-timetable'


export default function MainPage() {
    return (
        <View style={styles.container}>
            <View style={styles.headerView}>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.titletext}>🧐Attendance</Text>
            </View>
            <View style={styles.calendarView}>
            <CalendarList
                current= {Date}
                horizontal={false}
                pagingEnable={true}
                onDayPress={(day) => {console.log('selected day', day)}}
                monthFormat={'yyyy년 MM월'}
                scrollEnabled={true}
            />
            </View>
            <View style={styles.bottomView}>
                <Text>🧐Attendance</Text>
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    headerView: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    titleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "gray",
    },
    calendarView: {
        flex: 8,
    },
    middleView: {
        flex: 3
    },
    bottomView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    titletext: {
        alignSelf: 'flex-start',
        margin: 10,
        color: "white",
        fontSize: 20
    },
    calenderView: {
        flex: 1
    }
});