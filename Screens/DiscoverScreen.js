import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import { NewsContext } from '../context';
import { categories, sources } from "../Api"
import Carousel from 'react-native-snap-carousel';
import Loading from '../components/Loading';
import Search from '../components/Search';
const windowWidth = Dimensions.get("window").width;
const SLIDE_WIDTH = (windowWidth / 3.5);

const DiscoverScreen = () => {
    const { setCategory, setSource, loading, darkTheme } = useContext(NewsContext)
    return (
        <View style={styles.discover}>
            <Search />
            <Text style={{ ...styles.subtitle, color: darkTheme ? "white" : "black" }}>Discover</Text>
            {loading && <Loading />}
            <Carousel
                layout={"default"}
                data={categories}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => setCategory(item.name)}
                            style={styles.category}
                        >
                            <Image source={item.pic} style={styles.categoryImage} />
                            <Text
                                style={{ ...styles.name, color: darkTheme ? "white" : "black" }}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    );
                }}
                sliderWidth={windowWidth}
                itemWidth={SLIDE_WIDTH}
                activeSlideAlignment={"start"}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
            />
            <Text
                style={{ ...styles.subtitle, color: darkTheme ? "lightgray" : "black" }}
            >
                Sources
            </Text>
            <View style={styles.sources}>
                {sources.map((s) => (
                    <TouchableOpacity
                        onPress={() => setSource(s.id)}
                        key={s.id}
                        style={styles.sourceContainer}
                    >
                        <Image source={{ uri: s.pic }} style={styles.sourceImage} />
                    </TouchableOpacity>
                ))}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    discover: {
        padding: 10,
        alignItems: "center",
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 8,
        marginHorizontal: 5,
        borderBottomColor: "#007FFF",
        borderBottomWidth: 3,
        alignSelf: "flex-start",
    },
    category: {
        height: 130,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    categoryImage: {
        height: "60%",
        width: "100%",
        resizeMode: "contain",
    },
    name: {
        fontSize: 12,
        textTransform: "capitalize",
    },
    sources: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingVertical: 15,
    },
    sourceContainer: {
        height: 150,
        width: "40%",
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#cc313d",
    },
    sourceImage: {
        height: "100%",
        borderRadius: 10,
        resizeMode: "cover",
    },
});

export default DiscoverScreen
