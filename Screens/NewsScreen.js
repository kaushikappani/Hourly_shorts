import React, { useContext, useState } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import SingleNews from '../components/SingleNews'
import { NewsContext } from '../context';
import Loading from '../components/Loading';

const NewsScreen = () => {
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;
    let { news: articles, loading, setActiveindex, activeIndex, length } = useContext(NewsContext)
    return (
        <View style={styles.carousel}>
            {loading && <View style={{
                marginLeft: windowWidth / 2 - 15
            }}><Loading /></View>}
            {articles && (
                <Carousel
                    firstItem={length}
                    layout={"default"}
                    data={articles}
                    sliderHeight={300}
                    itemHeight={windowHeight}
                    vertical={true}
                    renderItem={({ item, index }) => (
                        <SingleNews item={item} index={index} />
                    )}
                    onSnapToItem={index => setActiveindex(index)}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: "black",
        transform: [{ scaleY: 1 }],
    }
})

export default NewsScreen
