import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'


const Loading = () => {
    return (
        <View style={styles.component}>
            <ActivityIndicator size="large" color={"#fff"} />
        </View>
    )
}

const styles = StyleSheet.create({
    component: {
        position: "absolute",
        zIndex: 10,
        marginTop: 20
    }
})

export default Loading
