import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../configs/variables';
import { Entypo } from '@expo/vector-icons';
import { getKeyById } from '../../apis/keys';
import { colors as uicolors } from '../../configs/variables';

const HistoryCard = (props) => {
    return (
        <View style={styles.card}>


            <View style={styles.buttonrow}>
                <View style={styles.department}>
                    <Text style={styles.subheading}>From time :</Text>
                    <Text style={styles.subheading}>{props.time.from}</Text>
                </View>
                <View style={styles.department}>
                    {/* <Text style={styles.subheading}>Capacity/Count :</Text>
                    <Text style={styles.subheading}>{props?.capacity}</Text> */}
                </View>
                <View style={styles.department}>
                    <Text style={styles.subheading}>To time:</Text>
                    <Text style={styles.subheading}>{props.time.to}</Text>
                </View>
            </View>
            <View style={styles.buttonrow}>
            </View>

            <View style={styles.buttonrow}>
                <View style={styles.department}>
                    <Text style={styles.subheading}>Applicant :</Text>
                    <Text style={styles.subheading}>{props.applicant}</Text>
                </View>
            </View>

        </View>
    )
}

export default HistoryCard

const styles = StyleSheet.create({
    card: {
        padding: 5,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 3,
        backgroundColor: "#FEEAE6",
        borderColor: colors.grey5,
        borderWidth: 3
    },
    row: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 5,
        marginVertical: 10,

    },
    icon: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontWeight: "bold",
        fontSize: 24
    },
    subheading: {
        fontSize: 18,
        fontWeight: "250"
    },
    statuscard: {
        padding: 5,
        backgroundColor: uicolors.rejectbg,
        borderRadius: 3
    },
    statustext: {
        fontWeight: "500"
    },
    switchrow: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    resourcename: {
        flex: 7,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        borderLeftColor: uicolors.grey,
        marginLeft: -10,
        borderLeftWidth: 5,
        paddingLeft: 5

    },
    buttonrow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center"
    },
    department: {
        flex: 7,
        flexDirection: "row",
        flexWrap: "wrap",
    }

})