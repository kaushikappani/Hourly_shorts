import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, SimpleLineIcons, Ionicons } from "@expo/vector-icons"
import { NewsContext } from '../context';

function TopNav({ index, setIndex }) {
    const { fetchNews, darkTheme, setDarkTheme, category, source } = useContext(NewsContext);
    console.log(category)
    return (
        <View style={{ ...styles.container, backgroundColor: darkTheme ? "#282C35" : "white" }}>
            {index === 0 ? <TouchableOpacity style={styles.left} onPress={() => setDarkTheme(!darkTheme)}>
                <Text style={{ ...styles.text, color: darkTheme ? "lightgray" : "black" }}>
                    <MaterialCommunityIcons
                        name="theme-light-dark"
                        size={24}
                        color="#007fff"
                    />
                </Text>
            </TouchableOpacity> : <TouchableOpacity style={styles.left}
                onPress={() => { setIndex(index === 0 ? 1 : 0) }}
            >
                <SimpleLineIcons name="arrow-left" size={15} color="#007fff" />
                <Text style={{ ...styles.text, color: darkTheme ? "lightgray" : "black" }}>  Discover</Text>
            </TouchableOpacity>}
            <Text style={{ ...styles.center, color: darkTheme ? "white" : "black" }}>

                {index ? category || source : "Discover"}
            </Text>
            {index ? (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => fetchNews("general")}
                >
                    <Text style={styles.text}>
                        <Ionicons name="reload" size={24} color="#007FFF" />
                    </Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={styles.right}
                    onPress={() => setIndex(index === 0 ? 1 : 0)}>
                    <Text style={{ ...styles.text, color: darkTheme ? "lightgray" : "black" }}>News</Text>
                    <SimpleLineIcons name="arrow-right" size={15} color="#007FFF" />
                </TouchableOpacity>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
        borderBottomColor: "black",
        borderBottomWidth: 0.5,
    },
    center: {
        paddingBottom: 6,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 3,
        borderRadius: 0,
        fontSize: 16,
        fontWeight: "700",
        textTransform: "capitalize"
    },
    left: {
        flexDirection: "row",
        alignItems: "center",
        width: 73,
        justifyContent: "space-between",
    },
    text: {
        fontSize: 16,
        marginRight: 3
    },
    right: {
        flexDirection: "row",
        alignItems: "center",
        width: 55,
        justifyContent: "flex-end",
    },
});

export default TopNav;